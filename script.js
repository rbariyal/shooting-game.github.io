
let roundCounter=0;

var player1Score=0;
var player2Score=0;
 function shootBtn(){
var player1Health=100;
var player2Health =100;
for(let i=0;i<100;i++)
{
var player1Fire = Math.floor(Math.random() * 6);
var player2Fire = Math.floor(Math.random() * 6);
console.log("Player 1 Fire : " +player1Fire);
console.log("Player 2 Fire : "+ player2Fire);

player1Health = player1Health-player2Fire;
player2Health= player2Health-player1Fire;
console.log("Player 1 Health : "+player1Health);
console.log("Player 2 Health : "+player2Health)

if(player1Health==0){
  player1Score=player1Score+1;
document.getElementById("grid-item-4").innerHTML=player1Score;
break;
}


if(player2Health==0){
  player2Score=player2Score+1;
document.getElementById("grid-item-8").innerHTML=player2Score;

break;
}
}
roundCounter++;
if(roundCounter==5)
{
document.getElementById("ShootBtn").disabled = true;
document.getElementById("ShootBtn").innerHTML="Game Over";
document.getElementById("ShootBtn").style.backgroundColor = "grey";
}

if(player1Score==3){
gameOver("Player 1 Won!")
}
if(player2Score==3){
gameOver("Player 2 Won!")
}


if(roundCounter==5){
if(player1Score>player2Score){
gameOver("Player 1 Won!")
}
if(player2Score>player1Score){
gameOver("Player 2 Won!")
}
//Checking if both the players have scored equaly, if yes then printing Draw


if(player2Score==player1Score){
gameOver("Match Draw")
}
} 
console.log("");
}
function gameOver(playercomment){
document.getElementById("grid-item-9").innerHTML = playercomment;
document.getElementById("ShootBtn").disabled = true;
document.getElementById("ShootBtn").innerHTML="Game Over";
document.getElementById("ShootBtn").style.backgroundColor = "grey";
}
function resetBtn(){
location.reload();
localStorage.clear();
}




