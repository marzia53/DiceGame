
var randomNumber1=Math.floor(7 * Math.random());
var randomNumber2=Math.floor(7 * Math.random());
var ranImg1= "dice" +randomNumber1+".png";
var surce1="images/" + ranImg1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",surce1);

var ranImg2= "dice" +randomNumber2+".png";
var surce2="images/" + ranImg2;
var img2 = document.querySelector(".img2");
img2.setAttribute("src",surce2);


if(randomNumber1>randomNumber2){
    
    document.querySelector("h1").textContent = "🚩Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 wins🚩";
}
else{
    document.querySelector("h1").textContent = "Draw";
}