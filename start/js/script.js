 $(".main1 ul li").mouseover(function(){
			var ind =$(this).index();
			 console.log(ind)
			$("#sml").css({ "background-image":"url(img/i/"+(ind+1)+".png)","display":"none"}).fadeIn(500);
		})
 $(function(){

	$('.slide1 .icon li').not('.up,.down').mouseenter(function(){
		$('.slide1 .info').addClass('hover');
		$('.slide1 .info li').hide();
		$('.slide1 .info li.'+$(this).attr('class')).show();//.slide .info li.qq
	});
	$('.slide1').mouseleave(function(){
		$('.slide .info').removeClass('hover');
	});
	
	$('#btn').click(function(){
		$('.slide1').toggle();
		if($(this).hasClass('index_cy')){
			$(this).removeClass('index_cy');
			$(this).addClass('index_cy2');
		}else{
			$(this).removeClass('index_cy2');
			$(this).addClass('index_cy');
		}
		
	});
	
});
 $(".big ul li a").hover(function(){
			$(this).stop().animate({"width":"540px"})
		}
		,
		function(){
			$(this).stop().animate({"width":"120px"})
		}
		)
 $(".ul li").click(function(){
		 	var ind=$(this).index();
    $(this).addClass("action").siblings().removeClass("action"); $(".box1").eq(ind).addClass("box3").siblings().removeClass("box3");
     $(".zoujin3").eq(ind).addClass("zoujin4").siblings().removeClass("zoujin4");
            
		})
 $(".main1 ul li").mouseover(function(){
     var ind=$(this).index();
     $(this).addClass("l").siblings().removeClass("l");
 })
 

 $(".col-md-3").mouseover(function(){
     var ind=$(this).index();
     $(".col-md-3 a").eq(ind).stop().animate({"opacity":"1","margin-top":"0"},500)
 }).mouseout(function(){
      var ind=$(this).index();
      $(".col-md-3 a").eq(ind).stop().animate({"opacity":"0","margin-top":"-80px"},10)
 })



var input=document.getElementById("input");
function he(){
    
        alert("留言成功！感谢您的支持")
    
}
$(".newsmain .newsmain1 img").click(function(){
    $(".newsmain .newsmain1 img").css({"margin-top":"1200px;"},500)
})
//$(".newsmain1 img").click(function{
//                      $(this).animate({"margin-top":"1200px;"},500)
//                      })

