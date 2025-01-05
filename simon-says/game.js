
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var level =0;
var gameStarted = false;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}

function checkAnswer(level) {
     
    console.log("Checking answer: " + userClickedPattern +" for level "+level);   
    console.log("Game pattern: "+gamePattern[level]);

    if (userClickedPattern[level] === gamePattern[level]) {        
        console.log("success");
    } else {
        console.log("wrong");
        playSound("wrong");
    }

    if (userClickedPattern.length === gamePattern.length) {
        gameStarted=false;
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("h1").text("Game Over, Press Any Key to Restart");
    }
}

function playSound(color) {
    var clickSound = new Audio("sounds/" + color + ".mp3");
    clickSound.play();
}

function startPattern() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];

    //initialize game pattern
    for (i=0; i<3; i++) {
        nextSequence();
    }

    //preview answer
    for (i=0; i < gamePattern.length; i++) {
        sleep(1000);
        $("#" + gamePattern[i]).delay(2000).fadeIn(100).fadeOut(100).fadeIn(100);
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

$(document).on('keypress', function (event) {
    if (event.type === 'keypress') {
        
        if (!gameStarted){
            console.log("Game Starting");
            startPattern();        
            gameStarted = true;
            console.log("generated pattern: " +gamePattern)
        }
    }
});

$('.btn').on('click', function (event) {
 
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("User pattern:" + userClickedPattern);
    $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);    

    checkAnswer(level);
    
    level=level+1;
    console.log("Incremented level: " +level);
    $('h1').text("Level " + level);     

 
});


