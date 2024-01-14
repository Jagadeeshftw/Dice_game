let randNum = Math.floor((Math.random() * 100) % 6) + 1;

let randNum1 = Math.floor((Math.random() * 100) % 6) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randNum}.png`);

document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randNum1}.png`);

if (randNum > randNum1) {
  document.querySelector("h1").innerHTML = "Player1 won the Match";
} else if(randNum< randNum1) document.querySelector("h1").innerHTML = "Player2 won the Match";
else
document.querySelector("h1").innerHTML = "Match is Draw";
