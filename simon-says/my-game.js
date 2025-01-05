//sample pattern

var sample = [];
var count=0;
var color = ['green', 'yellow','blue','red'];

$(document).keydown(function() { generatePattern() });
//generatePattern();

function generatePattern() {
    sample= [];

    for (i =0; i <= color.length; i++) {
        var random = Math.floor(Math.random() * color.length);
        sample.push(color[random]);
    }

    for (i =0; i < sample.length; i++) {
        $("#"+sample[i]).delay(1000).fadeOut(1000).fadeIn(1000);
    }

   // $("#level-title").hide();

    console.log("sample pattern is " + sample);
}

function checkPattern(color) {
    
    console.log("clicked on " + color);
    console.log("sample pattern is " + sample);
    console.log("count is " + count);
    console.log("sample[count] is " + sample[count]);
    console.log(sample[count] === color);

    if (sample[count] === color) {
        count++;
        $("#"+color).fadeOut(100).fadeIn(100);
    } else {  
        var clickSound = new Audio("sounds/wrong.mp3");
        clickSound.play();                //Reload the page for anther game
    }

    if (sample.length === count) {
        alert("you win");
    } 
}

    
    $("#blue").on("click", function () { 
        var clickSound = new Audio("sounds/blue.mp3");
        clickSound.play();
        checkPattern("blue");
    });

    $("#yellow").on("click", function () { 
               var clickSound = new Audio("sounds/yellow.mp3");
               clickSound.play();
               checkPattern("yellow");
           });
       
    $("#green").on("click", function () { 
               var clickSound = new Audio("sounds/green.mp3");
               clickSound.play();
               checkPattern("green");
           });
    $("#red").on("click", function () { 
               var clickSound = new Audio("sounds/red.mp3");
               clickSound.play();
               checkPattern("red");
            });
                     