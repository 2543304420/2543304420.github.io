//选择app给他增加内容
//vue只能选择一个（偏向于用id选择）
var app=new Vue({
    el:"#app",
    //el选择器（固定）
    methods:{
        e:function(){
            alert("hello vue")
            console.log("hello")
        }
    },
    //methods绑定函数

    data:{
        url:"http://www.qq.com",
        message:"hello world",
          text:"apptext",
        img:"img/1.jpg",
        imgalt:"图片1",
        hello:"everyone"
         }
    //data传数据（固定）
   
})