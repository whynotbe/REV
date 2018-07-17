window.onload = function(){
    changeAside();

}


function changeAside(){
    var aside = document.getElementsByClassName("asideText_1_1")[0];
    aside.innerHTML ="你从一片废墟中醒来..."
    var n = 0;
    var asideText = ["周围只有几堆潮湿的灰烬，黑色的雨水在地上缓缓流淌","脑子记不清发生了什么",];
    aside.onclick = function () {
        if(n>=asideText.length){
            changeLog01();
        }
        aside.innerHTML = asideText[n];
        n++;
    }
}
var aside02 = document.getElementsByClassName("asideText_1_2")[0];
var aside03 = document.getElementsByClassName("aside_1_2_button1")[0];
var aside04 = document.getElementsByClassName("aside_1_2_button2")[0];
var aside01 = document.getElementsByClassName("asideText_1_1")[0];
function  changeLog01(){

    aside01.style.display = "none";
    aside02.style.display = "block";
    aside02.innerHTML = "你选择";
    aside03.innerHTML = "再休息一会";
    aside04.innerHTML = "出去看看";
    aside03.style.display = "inline-block";
    aside04.style.display = "inline-block";
    aside03.onclick = function(){
        choose1_1();
    }
    aside04.onclick = function(){
        choose1_2();
    }
}

function choose1_1(){


}
function choose1_2(){


}