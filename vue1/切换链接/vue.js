var app=new Vue({
    el:"#app",
    data:{
        text:"点击切换到腾讯",
        a:"http://www.qq.com",
        message:"百度",
        t:true
    },
    methods:{
        eve:function(){
            if(this.t){
                this.text="点击切换到百度"
                this.a="http://www.baidu.com"
               this. message="腾讯"
                this.t=false
            }else{
                
             this.text="点击切换到腾讯"
            this.a="http://www.qq.com"
             this. message="百度"
                this.t=true
            }
        }
    }
})





























