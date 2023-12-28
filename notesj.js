document.addEventListener("keydown", function(event){
    keyPress(event.key);
});
function keyPress(key) {
    switch (key){
        case "z":
            effectOn(key);
            var d1 = new Audio("sounds/do-80236.mp3");
            d1.play();
            effectOff(key);
    }
    switch (key){
        case "x":
            effectOn(key);
            var d2 = new Audio("sounds/re-78500.mp3");
            d2.play();
            effectOff(key);
    }
    switch (key){
        case "c":
            effectOn(key);
            var d3 = new Audio("sounds/mi-80239.mp3");
            d3.play();
            effectOff(key);
    }
    switch (key){
        case "v":
            effectOn(key);
            var d4 = new Audio("sounds/fa-78409.mp3");
            d4.play();
            effectOff(key);
    }
    switch (key){
        case "b":
            effectOn(key);
            var d5 = new Audio("sounds/sol-101774.mp3");
            d5.play();
            effectOff(key);
    }
    switch (key){
        case "n":
            effectOn(key);
            var d6 = new Audio("sounds/la-80237.mp3");
            d6.play();
            effectOff(key);
    }
    switch (key){
        case "m":
            effectOn(key);
            var d7 = new Audio("sounds/si-80238.mp3");
            d7.play();
            effectOff(key);
    }
}
function effectOn(key){
    document.querySelector("." + key).classList.add("pressed");
}
function effectOff(key){
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 100000);
}
