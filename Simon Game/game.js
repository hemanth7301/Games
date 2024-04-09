var buttonColours =["red", "blue", "green", "yellow"]

var gamePattern=[]
var userClickedPattern=[]

var level=0
var started=false

$(document).keypress(function(){
    if(!started){
        started=true
        nextSequence()
    }
})

$(".btn").click(function(){
    var clicked_color=$(this).attr("id")
    userClickedPattern.push(clicked_color)
    playSound(clicked_color)
    animatePress(clicked_color)
    if(started){
        checkAnswer(userClickedPattern.length-1)
    }
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else{
        playSound("wrong")
        $("body").addClass("game-over")
        $("#level-title").text("Game Over, Press Any Key to Restart")
        setInterval(function(){
            $("body").removeClass("game-over")
        },200)
        startOver()
    }
}

function nextSequence(){
    userClickedPattern=[]
    level++
    $("#level-title").text("Level "+level)
    var randomNumber=Math.floor(Math.random()*4)
    var randomChosenColour=buttonColours[randomNumber]
    console.log(randomChosenColour)
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour);
}

function playSound(randomChosenColour){
    var audio=new Audio('sounds/'+randomChosenColour+'.mp3')
    audio.play()
}

function animatePress(clicked_color){
    $("#"+clicked_color).addClass("pressed")
    setTimeout(function(){
        $("#"+clicked_color).removeClass("pressed")
    },100)
}

function startOver(){
    level=0
    started=false
    gamePattern=[]
}