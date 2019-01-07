
window.onload = function(){
  document.getElementById("compete-btn").addEventListener("click", compete);
  document.getElementById("horse-btn").addEventListener("click", getAttr);
}

function getAttr(){
  if(document.getElementById("horse-btn").innerHTML == "查看属性"){
    document.getElementById("addr").innerHTML += GetQueryString("name");
    document.getElementById("speed").innerHTML += 77;
    document.getElementById("balance").innerHTML += 63;
    document.getElementById("horse-img").className = "after";
    document.getElementById("horse-btn").innerHTML = "返回";
    document.getElementById("attr").className="show";
  }
  else{
    document.getElementById("horse-img").className = "before";
    document.getElementById("horse-btn").innerHTML = "查看属性";
    document.getElementById("attr").className="hide";
  }
}

function compete(){
  if(document.getElementById("compete-btn").innerHTML == "参加比赛"){
    document.getElementById("compete-btn").innerHTML = "正在比赛.."
    setTimeout(function(){
      document.getElementById("compete-img").className = "result";
      document.getElementById("compete-btn").innerHTML = "返回";
    }, 3000);
  }
  else if(document.getElementById("compete-btn").innerHTML == "返回"){
    document.getElementById("compete-btn").innerHTML = "参加比赛";
    document.getElementById("compete-img").className = "origin";
  }
}


function GetQueryString(name)
{
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)
    return unescape(r[2]); 
  return null;
}