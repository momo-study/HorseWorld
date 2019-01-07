pragma solidity ^0.5.0;

contract HorseFactory{
    
    event NewHorse(uint horseId, string name, uint speed, uint balance);
    
    uint modulus= 99;
    
    struct Horse{
        string name;
        uint speed;
        uint balance;
    }
    
    Horse[] public horses;
    
    mapping (uint => address) public horseToOwner;
    mapping (address => uint) ownerHorseCount;
    

    function _createHorse(string memory _name, uint _speed, uint _balance) private{
        uint id = horses.push(Horse(_name, _speed, _balance)) - 1;
        horseToOwner[id] = msg.sender;
        ownerHorseCount[msg.sender]++;
        emit NewHorse(id, _name, _speed, _balance);
    }
    
    function _generateRandomSpeed(string memory _str) private view returns (uint){
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % modulus + 1;
    }
    
    function _generateRandomBalance(string memory _str) private view returns (uint){
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % modulus + 1;
    }
    
    function createRandomHorse(string memory _name) public {
        require(ownerHorseCount[msg.sender] == 0);
        uint speed = _generateRandomSpeed(_name);
        uint balance = _generateRandomBalance(_name);
        _createHorse(_name, speed, balance);
    }
    
}