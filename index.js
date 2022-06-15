
const handleEvent=document.querySelectorAll(".drum");


//check for click event

handleEvent.forEach(item=>item.addEventListener("click",function(){
    const btnClick=this.innerHTML;
    generateSound(btnClick);
}));

//check for keydown event
document.addEventListener("keydown",function(e){
    generateSound(e.key);
});

//generating sound based on click/press
function generateSound(key){

    switch(key){

        case "r":
            var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
        case "s":
            var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
        case "h":
            var tom2= new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
        case "o":
            var tom3= new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
        case "w":
            var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;


    }

}



    
