//Instructor's logic -- short and apt


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//step1- Geneerate random number.

var randomImageName1 = "dice" + randomNumber1 + ".png";
var randomImageName2 = "dice" + randomNumber2 + ".png";
//step2- Concatenate strings. Create img file names using random numbers. Game over!!!!!!

var image1Source = "images/" + randomImageName1;
var image2Source = "images/" + randomImageName2;
//step3- Create strings for img file path.

var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", image1Source);

var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", image2Source);
//step4- Change image files according to the random number generated.

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
//step5- Build a logic to  display the winner name!


// Onkar's logic--lengthy, redundant.
//But completed the challenge successfully.
//Need to think hard to write a dynamic and shorter code.


// if (randomNumber1 === 1) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 === 2) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// } else if (randomNumber1 === 3) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
// } else if (randomNumber1 === 4) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// } else if (randomNumber1 === 5) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
// } else {
//   document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
// }
//
// if (randomNumber2 === 1) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
// } else if (randomNumber2 === 2) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
// } else if (randomNumber2 === 3) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
// } else if (randomNumber2 === 4) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
// } else if (randomNumber2 === 5) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
// } else {
//   document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
// }
//
