window.onload = function(){
    changeAside();
    //test();

}
/*var print = function(){
    console.log("test1")
}*/

function changeAside(){
    var aside = document.getElementsByClassName("asideText_1_1")[0];
    aside.innerHTML ="you are awaken...";
    var n = 0;
    var asideText = ["Ahes and rain flows","what happened?"];
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
    console.log(aside02);
    console.log(aside01);
    aside01.style.display = "none";
    aside02.style.display = "block";
    aside02.innerHTML = "you choose";
    aside03.innerHTML = "rest";
    aside04.innerHTML = "go outside";
    aside03.style.display = "inline-block";
    aside04.style.display = "inline-block";
    aside03.onclick = function(){
        choose1_1();
    };
    aside04.onclick = function(){
        choose1_2();
    }
}

function choose1_1(){
    playerAtr.stamia +=2;
    playerAtr.food -=1;
    console.log("stamia +2");
    aside02.innerHTML = "A short rest recovered your stamia.You go out and something attacks you!";
    aside03.innerHTML = "fight back";
    aside04.innerHTML = "run!";
    aside03.onclick = function(){
        startBattle();
    }
    aside04.onclick=function () {
        changelog02();
    }

}
function choose1_2(){
    aside02.innerHTML = "You go out and a shandow attcaks you!";
    aside03.innerHTML = "fight back";
    aside04.innerHTML = "run!";
    aside03.onclick = function(){
        startBattle();
    }
     aside04.onclick=function () {
        changelog02();
    }

}
function changelog02(){
    var num = Math.random();
    console.log(num);
    if(num >= 0.6){
        alert("you have eascaped");
        playerAtr.speed +=0.5;
    }else{
            startBattle();

    }

}

function startBattle(){
    loadBattle();
    alert("you are dead");
}