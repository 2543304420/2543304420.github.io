var app=new Vue({
    el:"#app",
    data:{
        text:"按钮",
        imgsrc:"img/1.jpg",
        alt:"1",
        t:true
    },
    methods:{
       eve:function(){
           if(this.t){
               this.imgsrc="img/2.jpg"
               this.t=false
           }else{
               this.imgsrc="img/1.jpg"
               this.t=true
           }
       }
    }
    
})





































