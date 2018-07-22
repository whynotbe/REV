var aside_1_1 = $(".aside_1_1")[0];
console.log(aside_1_1);

var turn = 0;
var player ="player1";
var monster ="monster1";

var loadBattle = function(){
    console.log("2");
    aside_1_1.style.display = "none";
    var battleBackground = $("<div></div>");
    var battleTurn = $("<div></div>");
    battleTurn.html("Round"+turn);
    var statusBar = $("<div></div>");
    var playerName = $("<div></div>");
    var enemyName = $("<div></div>");
    var enemyStatus = $("<div></div>");
    var playerStatus = $("<div></div>");
    var skillBar = $("<div></div>");
    var battleInfo = $("<div></div>");
    battleTurn.attr({id:"battleTurn"});
    statusBar.attr({id:"statusBar"});
    playerName.attr({id:"playerName"});
    enemyName.attr({id:"enemyName"});
    battleBackground.attr({id:"battleBackground"});
    enemyStatus.attr({id:"enemyStatus"});
    playerStatus.attr({id:"playerStatus"});
    skillBar.attr({id:"skillBar"});
    battleInfo.attr({id:"battleInfo"});
    $(".background").append(battleBackground);
    battleBackground.append(battleTurn);
    battleBackground.append(battleInfo);
    battleBackground.append(statusBar);

    statusBar.append(playerName);
    statusBar.append(playerStatus);
    statusBar.append(enemyName);
    statusBar.append(enemyStatus);
    battleBackground.append(skillBar);

    playerName.html(player);
    enemyName.html(monster);
}