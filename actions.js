var dice1Random = Math.floor(Math.random()*6) + 1;
var dice2Random = Math.floor(Math.random()*6) + 1;

if(dice1Random === dice2Random){
    document.querySelector("h1").innerText = "It's a Draw"
}else if(dice1Random > dice2Random){
    document.querySelector("h1").innerText ="Player 1 Won!"
} else {
    document.querySelector("h1").innerText ="Player 2 Won!"
}

firstDice = document.querySelector("img.img1").setAttribute("src", "images/dice"+dice1Random+".png");
secondDice = document.querySelector("img.img2").setAttribute("src", "images/dice"+dice2Random+".png");

