function chooseRandomDice() {
    //choose a random number from 1-6
    var imgNum = Math.floor(Math.random() * 6) + 1;
    var img = document.getElementsByClassName("img1")[0];

    img.src = "./images/dice" + imgNum + ".png";

    //do this again so that both dice are kept in sync
    var imgNum2 = Math.floor(Math.random() * 6) + 1;
    var img = document.getElementsByClassName("img2")[0];

    img.src = "./images/dice" + imgNum2 + ".png";

    //make a judgement using the numbers
    if (imgNum > imgNum2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (imgNum < imgNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

