function loveCalculator() {
    yourName = prompt("What is your name?");
    thierName = prompt("What is their name?")
    
    var result = Math.random();
    result = result * 100;
    result = Math.floor(result) + 1;


if(result >= 90){
    
    var message = "Your Love Score is " + result + "%! You love each other like Kanye loves Kanye";
    
    var picture = "../../images/lovescore.jpeg";
}
if(result < 90 && result >= 70){
    
    var message = "Your Love Score is " + result + "%! You love is strong!";

    var picture = "../../images/lovescore.jpeg";
    
}
if(result === 69){ 
    
    var message = "Your Love Score is " + result + "%, Nice!";
    
    var picture = "../../images/lovescore.jpeg";
}
if(result < 69  && result > 50){
    
    var message = "Your Love Score is " + result + "%. Your love has so much potential!";

    var picture = "../../images/lovescore.jpeg";
}
if(result <= 50){
    
    var message = "Your Love Score is " + result + "%. Your love really needs some work...";

    var picture = "../../images/lovescore.jpeg";

}

document.querySelector("body > div > h2").textContent = message

document.querySelector("img").setAttribute("src", picture);
document.querySelector("img").setAttribute("width", "20%");


}