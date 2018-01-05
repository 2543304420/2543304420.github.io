var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3
    , spaceBetween: 30
    , freeMode: true
    , pagination: {
        el: '.swiper-pagination'
        , clickable: true
    , }
, });
var boss=document.querySelector(".boss");
var
fen=document.getElementById("fen");
var
bossimg=document.getElementById("bossimg");
var
pack=1;
fen.onclick=function(){
        boss.style.left=0;
    if(pack==0){
      
        pack=1;
    }
}
bossimg.onclick=function(){
        boss.style.left="-100%";
    if(pack==1){
       
        pack=0;
    }
};

