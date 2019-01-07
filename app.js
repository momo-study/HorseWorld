var express = require('express')
var fs = require('fs')
var app = express()
var Web3 = require("web3")
var web3 = new Web3()
var daystate = "day"
var online = [0, 0, 0, 0, 0, 0, 0, 0]
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))
var horseFactory

    app.use(express.static(__dirname + '/public'));
    app.get('/', function (req, res) {
        res.sendFile( __dirname + "/public/signin.html");
    })

    //添加玩家加入游戏
    /*app.get('/address', function (req, res) {
      // 输出 JSON 格式
      var response = {
        "address":req.query.name,
        "number":req.query.number,
        "players":req.query.add
      };
      console.log(response)
      for (i = 0; i < response.number; i++) {
        console.log(response.address, response.players[i])
        horseFactory.add_players.sendTransaction(response.players[i], {from: response.address, gas: 300000});
      }
      console.log(horseFactory.game_is_on.call())
      horseFactory.start_game.sendTransaction({from: response.address});
      console.log(horseFactory.game_is_on.call())
      res.sendFile( __dirname + "/public/game.html");
    })*/
    //玩家登陆游戏
    app.get('/game', function (req, res) {
      // 输出 JSON 格式
      var response = {
        "address":req.query.name
      };
      console.log(response)
      res.sendFile( __dirname + "/public/zgame.html");
    })

    app.get('/main',function(req,res){
      var response = {
        "address":req.query.name
      };
      console.log(response)
      res.sendFile( __dirname + "/public/zzmain.html");
    })
    //接收在登录界面填写表单时发送来的信息
    app.post('/',function(req,res) {
      req.on('data',function(data){
        obj=JSON.parse(data);
        var taddr = obj.address;
        console.log(taddr);
        //res.send(horseFactory.query_role(taddr));
      })
    })
    //接收登陆游戏时发送来的信息
    app.post('/game',function(req,res) {
      req.on('data',function(data){
        obj=JSON.parse(data);
        var taddr = obj.address;
        console.log("game", taddr);
      })
    })
    /*app.post('/main', function(req,res){
      req.on('data',function(data){
        obj=JSON.parse(data);
        var name = obj.address;
        console.log("name", name);
      })
    })*/

    var server = app.listen(8080, function () {
      var host = server.address().address
      var port = server.address().port
      console.log("Server listening..")
    })

  