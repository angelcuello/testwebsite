//Add event listener to button presses

for (i=0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;


        //Send button pressed inner HTML to makeSound function
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    
    });

}

//Add event listener to keypresses

document.addEventListener("keydown", function(event){

    //Send key pressed to makeSound function
    makeSound(event.key);
    buttonAnimation(event.key);
    
});


//Check which key or button was pressed and make associated sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;   
        
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;  

        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;  

        default: console.log(buttonInnerHTML);             
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){

        activeButton.classList.remove("pressed");

    }, 100);



}



   
/*
Random Notes


var audio = new Audio("./sounds/tom-1.mp3");
 audio.play();
 alert(event.target.textContent + " was clicked!")
  console.log(this.style.color = "white");



*/