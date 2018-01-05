var text=document.getElementById("text");
var s=document.getElementById("s");
var s1=document.getElementById("s1");
var p2=document.getElementById("p2");
var gg=document.getElementById("gg");
var submit=document.getElementById("submit");
text.onfocus=function(){
    s.style.color="#4685ee";
    gg.innerHTML="请输入账号";
}
text.onblur=function(){
    s.style.color="#333";
}
p2.onfocus=function(){
    s1.style.color="#4685ee";
    gg.innerHTML="请输入密码";
}
p2.onblur=function(){
    s1.style.color="#333";
}
submit.onclick=function(){
    if(text.value==""&&p2.value==""){
        alert("不能为空");
    }else{
        alert("登陆成功");
        text.value="";
        p2.value="";
    }
}