//HTML元素加载完成后执行代码
window.onload=function(){
    console.log("hello");
}
//创建一个函数
function imgLocation(){}
//执行这个函数
imgLocation();

//JSON字符串
var bJSON=[{"img":"1.jpg"},{"img":"2.jpg"}];
//调用数据
bJSON[0].img;

//滚动条事件：滚动条滚动的时候执行代码
window.onscroll=function(){}

//if 判断，判断括号里面的结果为true的时候执行代码
if(true){}

//创建一个函数，这个函数的返回值是true
function getScroll(){
    if(10>5){
        return true;
    }
}
//执行这个函数，这个函数为true
getScroll();

//声明一个变量为box的选择器，选择页面上所有的class类为box的标签
var box=document.querySelectorAll(".box");
//取得页面中第一个带box类名的标签
box[0];

//等号前面是变量名，等号后面是得到的是box选择器的长度减1的值，然后把等号后面的值赋给等号前面的值
var lastBox=box.length-1;
//获取最后一个box距离父级（顶部）元素的距离，单位是像素
//offsetTop:当前对象到期上层顶部的间隔
var lastBoxTop=box[lastBox].offsetTop;
//获取当前浏览器的可视窗口的高度，单位是像素
var ieHeight=document.body.clientHeight;
//各个浏览器的兼容性不同，一些代码也不同
document.documentElement.clientHeight;
//当前滚动条距离顶部的位置，单位是像素
document.body.scrollTop;

//如果最后一张图片距离顶部的高度大于当前窗口的高度加上滚动条的距离顶部的距离那么就返回true
if(lastBoxTop<ieHeight+screenTop){
    return true;
}
//for循环是在希望创建循环的时候所用的代码
//初始值：在循环代码块开始之前执行
//布尔值：定义循环代码块的条件，如果条件通过才执行
//计数器：在循环代码块执行后执行
for(初始值;布尔值;计数器){代码块}

//选择页面中第一个class类名为container的类
var c=document.querySelector(".container");
//用js创建一个div标签，并赋值给变量d
var d=document.createElement("div");
//给变量c赋值类名
d.className="box";
//追加创建的标签到container里面
//appendChild():向节点末尾追加节点
c.appendChild(d);

//获取第一个box的宽度，单位是像素
var boxWidth=box[0].offsetWidth+"px";
//获取浏览器当前可视窗口的宽度
document.documentElement.clientWidth;
document.body.clientWidth;

//取得一个整数
Math.floor()
//创建一个盒子高度的数组
var boxHeightArr=[];
//循环输出一些内容
for(){}
//获取box的高度
box[i].offsetHeight;
//取得数组中的一个值
boxHeightArr[i];
if(i<3){}
boxHeightArr[i]=box[i].offsetHeight;

//获取最小的那个数字
Math.min()
//获取数组中最小的那个值 
Math.min.apply(null,[5,1,3,7]);