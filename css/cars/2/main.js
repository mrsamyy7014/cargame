var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")
var gameoutsounf=document.getElementById("gameout")
var mainthim=document.getElementById("mainthim")



// bluecar move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    counter++
    mainthim.play();
       
    
})

//rececar move
window.addEventListener("keydown", function(e){
    console.log('key code==>>>>>',e.keyCode);
    if(e.keyCode == "39"){
     var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(raceCarLeft < 260){raceCar.style.left = (raceCarLeft + 130) + "px"}
    jumpsound.play()
    };

    if (e.keyCode == "37") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 130) + "px"

            jumpsound.play()
        }

    }
})


//Game over
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 380) && (blueCarTop < 550)){   
            result.style.display = "block";
            game.style.display = "none";
            crontrol.style.display="none"
            mainthim.ariaCurrentTime=0;
            
            score.innerHTML = `score: ${counter} `;
            gameoutsounf.play()
            counter = 0;
            
        }
}, 10)

/// closed manu...>>>
function closewindow(){
   let w = window.close("file:///D:/coding/project/2proj/cars/2/cargame.html");
    //_parent:- se hamara window same pag me hi khulega   
   }

   function openwindow(){
    let vb=window.open('F:/coding/project/2proj/main/start.html','_parent')
   }


   ////sound..>>>>

//    setTimeout(
   
//    },1000);

