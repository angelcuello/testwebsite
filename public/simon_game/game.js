var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;



$(document).on("keydown", function(){  
    
    if (level === 0){
        nextSequence();
    }

});


$(".btn").click(function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor)
    //console.log(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

    console.log(userClickedPattern)
});


function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function(){
                nextSequence();
                userClickedPattern = []
                }, 1000); 
        }


    }
    else{

        $("h1").text("Game Over, Press Any Key to Restart");
        level = 0
        gamePattern = [];
        userClickedPattern = []
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
             }, 200); 


    }
}


function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    level++;
    $("h1").text("Level " + level);
    console.log(gamePattern);
}

function playSound(name){

    $("#" + name).fadeOut(100).fadeIn(100);
    var audio = new Audio("./sounds/" + name +".mp3");
    audio.play();

}
