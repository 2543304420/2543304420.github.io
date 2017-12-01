window.onload = function () {
    var li = document.querySelectorAll("#nav li");
    var o=true;
    li[li.length - 1].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            // i= 0 1 2 3 4 5 6 7 8 9 10 11
            // n= -6 -5 -4 -3 -2 -1 0 1 2 3 4 5
            //最终得到的值是deg: -90 -75 -60 -45 -30   -15 0 15 30 45 60 75
            var n = i - li.length / 2;
            if(o){
            n = n * 15;}else{
                n=360;
            }
            li[i].style.transform = "rotateZ(" + n + "deg)";
        }
        o=!o;
    }
}































//window.onload = function () {
//    var li = document.querySelectorAll("li");
//    var o=true;
//    li[li.length - 1].onclick = function () {
//        for (var i = 0; i < li.length; i++) {
//            var n = i - li.length / 2;
//            if(o){
//            n = n * 15;}else{
//                n=360;
//            }
//            li[i].style.transform = "rotateZ(" + n + "deg)";
//        }
//        o=!o;
//        
//    }
//}