var message = "";
var id = 0
var rg_adr = /^0x([0-9a-f]){40}$/;
// rg开头的变量为正则表达式，message为提示信息
window.onload = function() {
  document.getElementById("name").addEventListener("input", check);
  document.getElementById("submit").addEventListener("click", submit);
}

function check() {
  var addr = document.getElementById("name").value;
  if (addr) {
    if (!rg_adr.test(addr)) {
      document.getElementById("name_message").className = "wrong";
      document.getElementById("name_message").innerHTML = "地址不合法！";
      message = "地址不合法！\n";
    }
    else {
      message = ""
      document.getElementById("name_message").className = "right";
      document.getElementById("name_message").innerHTML = "地址正确";      
      post(addr);
    }
  }
  else {
    document.getElementById("name_message").className = "wrong";
    document.getElementById("name_message").innerHTML = "地址不能为空！";
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

function post(addr){
  obj={
    address: addr
  };
  Ajax({
    url:'/',
    method:'POST',
    obj:obj
  })
}
