var getDrums=document.querySelectorAll("button.drum");
for(var i=0;i<getDrums.length;i++){
    getDrums[i].addEventListener("click",function (){
        var getInnerHTML=this.textContent;
       buttonAnimation(getInnerHTML);
        makeSound(getInnerHTML);
        
       
    });

}
document.addEventListener("keypress",function (event){
makeSound(event.key);
     buttonAnimation(event.key);
})
function makeSound(key){
   
    switch (key) {
        case "w":  var mp3=new Audio("sounds/tom-1.mp3");
                   mp3.play();
                   break;
        case "a":  var mp3=new Audio("sounds/tom-2.mp3");
                   mp3.play();
                   break;
        case "s":  var mp3=new Audio("sounds/tom-3.mp3");
                   mp3.play();
                   break;
        case "d":  var mp3=new Audio("sounds/tom-4.mp3");
                   mp3.play();
                   break;
        case "j":  var mp3=new Audio("sounds/snare.mp3");
                   mp3.play();
                   break;
        case "k":  var mp3=new Audio("sounds/crash.mp3");
                   mp3.play();
                   break;
        case "l":  var mp3=new Audio("sounds/kick-bass.mp3");
                   mp3.play();
                   break;
        default:console.log("Something went wrong in switch Statement");
            break;
    }
}
function buttonAnimation(currentKey){
var active=document.queryselector("."+currentKey);
    active.classList.add("pressed");
    setTimeout(funtion(){active.classlist.remove("pressed");},100);

}
