var aside_1_1 = $(".aside_1_1")[0];
console.log(aside_1_1);



var loadBattle = function(){
    console.log("2");
    aside_1_1.style.display = "none";
    var battleBackground = $("<div></div>");
    var enemyStatus = $("<div></div>");
    var playerStatus = $("<div></div>");
    var skillBar = $("<div></div>");
    var battleInfo = $("<div></div>");
    var turnNum = $("<div></div>");
    battleBackground.attr({id:"battleBackground"});
    enemyStatus.attr({id:"enemyStatus"});
    playerStatus.attr({id:"playerStatus"});
    skillBar.attr({id:"skillBar"});
}