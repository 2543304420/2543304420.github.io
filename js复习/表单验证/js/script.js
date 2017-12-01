//支持字母、数字的2-18个字符
function f(id,text){
    //找到当前input下的p标签
    var p=id.nextElementSibling;
    p.innerHTML=text;
}
var user=document.querySelector("#user");
//用户名在焦点状态下的事件
user.addEventListener("focus",function(){
    f(this,"支持字母、数字的2 -18个字符");
})
var password=document.querySelector("#password");
password.addEventListener("focus",function(){
    f(this,"建议使用字母数字长度为6-18个字符");
})
var num=document.querySelector("#num");
num.addEventListener("focus",function(){
    f(this,"请输入手机号");
}) 
var code=document.querySelector("#code");
code.addEventListener("focus",function(){
    f(this,"请输入验证码");
})

//获取验证码
var getCode=document.querySelector("#getCode");
var yzm;
var time=5;
getCode.onclick=function(){
    yzm=Math.floor(Math.random()*9000+1000);
   t= setInterval(function(){
       if(time>0){
        getCode.disabled="disabled";
        getCode.value=time;
           time--;
           }else{
               clearInterval(t);
               getCode.value="获取验证码";
               getCode.disabled="";
               
           }
    },1000);
   
    alert("验证码为："+yzm)
}

//验证码失去焦点的事件
//验证码不能为空
//验证码不匹配
//验证码通过

function b(){
     var p= code.nextElementSibling;
    if(code.value===""){
      
        p.innerHTML="验证码不能为空";
        return false;
    }else if(code.value!=yzm){
        p.innerHTML="验证码不符"
        return false;
    }else{
        p.innerHTML="验证码通过"
        return true;
    }
}
code.addEventListener("blur",function(){
    b();
})


//function b(ie,txt){
//    var p=ie.nextElementSibling;
//    p.innerHTML=txt;
//}
//user.addEventListener("blur",function(){
//    b(this,"用户名不能为空");
//})



//阅读协议
var check=document.querySelector("#check");
function c(){
    if(check.checked===false){
        alert("请勾选用户协议");
        return false;
    }else{
        return true;
    }
}
function form(){
    if(b()!=true){
        alert("验证码输入有误");
        return false;
    }else if(c()!=true){
        return false;
    }
    else{
        alert("输入正确");
        return true;
    }
}