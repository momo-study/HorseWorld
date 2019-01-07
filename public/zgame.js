var timer;
window.onload = function(){
  document.getElementById("gift-img").addEventListener("click", getGift);
  document.getElementById("name").addEventListener("input", check);
  document.getElementById("btn").addEventListener("click", submit);
}

function check(){
  var name = document.getElementById("name").value;
  if (name) {
    if (!(/^[a-zA-Z]\w{5,17}/.test(name))) {
      document.getElementById("name_message").className = "wrong";
      document.getElementById("name_message").innerHTML = "名字不合法！";
      message = "名字不合法！\n";
    }
    else {
      message = ""
      document.getElementById("name_message").className = "right";
      document.getElementById("name_message").innerHTML = "名字正确";      
      post(name);
    }
  }
  else {
    document.getElementById("name_message").className = "wrong";
    document.getElementById("name_message").innerHTML = "名字不能为空！";
    message = "地址不能为空！\n";
  }
}

function submit(event) {
  if (message) {
    alert(message+"请重新填写");
    message = "";
    return false;
  }
  else {
    this.type = "submit";//如果通过表单验证将类型设置为提交
    return true;
  }
  //document.getElementById("name").value = document.getElementById("number").value;
}


function getGift(){
  document.getElementById("gift-img").className = "gif";
  setTimeout(function(){
    document.getElementById("gift-img").className = "horse";
    document.getElementById("choose").className = "hide";
    document.getElementById("congratulation").className = "show";
    document.getElementById("getname").className = "show";
    document.getElementById("name-text").className = "show";
    document.getElementById("name-btn").className = "show";
  }, 5000);
}

function Ajax(json){
  var url=json.url;
  var method=json.method;
  var success=json.success;
  var obj=json.obj;
  var request=null;
  if(window.XMLHttpRequest){
    request=new XMLHttpRequest();
  }else{
    try{
      request=new ActiveObject('Microsoft.XMLHTTP');
    }
    catch(faild){
      alert('Error:Ajax request faild');
    }
  }
  if(request!=null){      
    request.onreadystatechange=function(){
      if(request.readyState==4&&request.status==200){
        var text=request.responseText;
        success(text);
      }else{                      
      }           
    }
    request.open(method,url,true);
    request.send(JSON.stringify(obj));  
  }
}

function post(_name){
  obj={
    name: _name
  };
  Ajax({
    url:'/',
    method:'POST',
    obj:obj
  })
}

