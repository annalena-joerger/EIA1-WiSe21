namespace L07 {

/*Verlinkung Sounds*/
var Ton:HTMLAudioElement []= [new Audio("./assets/A.mp3"), new Audio('./assets/C.mp3'), new Audio ('./assets/F.mp3'), new Audio ('./assets/G.mp3'), 
new Audio ('./assets/hihat.mp3'), new Audio ('./assets/kick.mp3'), new Audio ('./assets/laugh-1.mp3'), new Audio ('./assets/laugh-2.mp3'), 
new Audio ('./assets/snare.mp3')];

window.addEventListener ("load", function playSample (){

/*Sounds für Knöpfe*/
document.querySelector(".Box1").addEventListener("click", function(): void {(Ton[0]).play()});
document.querySelector(".Box2").addEventListener("click", function(): void {(Ton[1]).play()});
document.querySelector(".Box3").addEventListener("click", function(): void {(Ton[2]).play()});
document.querySelector(".Box4").addEventListener("click", function(): void {(Ton[3]).play()});
document.querySelector(".Box5").addEventListener("click", function(): void {(Ton[4]).play()});
document.querySelector(".Box6").addEventListener("click", function(): void {(Ton[5]).play()});
document.querySelector(".Box7").addEventListener("click", function(): void {(Ton[6]).play()});
document.querySelector(".Box8").addEventListener("click", function(): void {(Ton[7]).play()});
document.querySelector(".Box9").addEventListener("click", function(): void {(Ton[8]).play()});

/*Sound Playbutton*/
document.querySelector("#playbutton").addEventListener("click", function Playbutton(){

    setInterval(function(){Ton[4].play()
    },500);
    setInterval(function(){Ton[5].play()
    },750);
    setInterval(function(){Ton[8].play()
    },250);
})})
    


/*Bonusaufgabe*/
document.addEventListener('keydown', function(tastatur) {
    
  if(tastatur.key == "1"){
    (Ton[0]).play(); }
  else if(tastatur.key == "2"){
    (Ton[1]).play();
  }
  else if(tastatur.key == "3"){
    (Ton[2]).play();
  }
  else if(tastatur.key == "4"){
    (Ton[3]).play();
  }
  else if(tastatur.key == "5"){
    (Ton[4]).play();
  }
  else if(tastatur.key == "6"){
    (Ton[5]).play();
  }
  else if(tastatur.key == "7"){
    (Ton[6]).play();
  }
  else if(tastatur.key == "8"){
    (Ton[7]).play();
  }
  else if(tastatur.key == "9"){
    (Ton[8]).play();
}

}); 
}
  


