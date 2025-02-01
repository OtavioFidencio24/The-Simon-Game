var usersChoice = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var level = 1;
var start = false;

function nextSequence(){
    $("h1").text("Level " + level);
    usersChoice = [];
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("."+randomChosenColour).fadeOut(110, function(){
    }).fadeIn(110);
    playSound(randomChosenColour);
    level++;
}

        
$(".itens-model").on("click", function(e){ 
    usersChoice.push(e.target.id);
    $("#" + e.target.id).addClass("button-clicked");
    setTimeout(function(){
        $("#" + e.target.id).removeClass("button-clicked");
    }, 100)
    playSound(e.target.id);
    checkAnswear(usersChoice.length-1)
})
        

$(document).on("keydown", function(){
    if(!start){
        nextSequence();
        start = true;
    }
})

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();  
}

function checkAnswear(currentLevel) {
    if (gamePattern[currentLevel] === usersChoice[currentLevel]){
        if (gamePattern.length === usersChoice.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("red");
        setTimeout(function(){
        $("body").removeClass("red");
    }, 100)
        playSound("wrong");
        startOver();
    }
    
}

function startOver(){  
    start = false;
    level = 1;
    gamePattern = [];
}








