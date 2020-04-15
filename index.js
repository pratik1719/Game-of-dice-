
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomimg= "images/dice"+randomNumber1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg);
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomimg= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimg);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🥇Player 1 Wins"
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins🥇"
}else{
  document.querySelector("h1").innerHTML="DRAW🏴‍☠️"

}
