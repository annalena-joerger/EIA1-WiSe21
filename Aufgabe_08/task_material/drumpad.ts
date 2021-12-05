namespace L07 {

/*Arrays, in dem alle Töne untergebracht sind*/
var TON: string [] = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"), 
("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"), 
("./assets/snare.mp3")];

var BEAT: string [] = [("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/snare.mp3")];

var remix:  number;
var interval: number;
var index: number = 0;

window.addEventListener ("load", function (): void {


/*Sounds für Knöpfe*/
document.querySelector(".Box1").addEventListener("click", function(): void {playSample(TON[0]); });
document.querySelector(".Box2").addEventListener("click", function(): void {playSample(TON[1]); });
document.querySelector(".Box3").addEventListener("click", function(): void {playSample(TON[2]); });
document.querySelector(".Box4").addEventListener("click", function(): void {playSample(TON[3]); });
document.querySelector(".Box5").addEventListener("click", function(): void {playSample(TON[4]); });
document.querySelector(".Box6").addEventListener("click", function(): void {playSample(TON[5]); });
document.querySelector(".Box7").addEventListener("click", function(): void {playSample(TON[6]); });
document.querySelector(".Box8").addEventListener("click", function(): void {playSample(TON[7]); });
document.querySelector(".Box9").addEventListener("click", function(): void {playSample(TON[8]); });
document.querySelector(".fa-play-circle").addEventListener("click", function(): void {playBeat(BEAT[0]); });
document.querySelector(".fa-play-circle").addEventListener("click", function(): void {playBeat(BEAT[1]); });
document.querySelector(".fa-play-circle").addEventListener("click", function(): void {playBeat(BEAT[2]); });

document.querySelector(".fa-random").addEventListener("click", REMIX);
document.querySelector(".fa-trash-alt").addEventListener("click", deletebutton);



/*Funktion Töne*/
function playSample(audio: string): void {
  var ton: HTMLAudioElement = new Audio (audio);
  ton.play();
}

/*Funktion Beat, wenn man auf Playbutton klickt*/
function playBeat(audio: string): void {
  var beat: HTMLAudioElement = new Audio (audio);
  beat.loop = true;
  

  if (document.getElementById("play").classList.contains("fa-play-circle")) {
    document.getElementById("play").classList.remove("fa-play-circle");
    document.getElementById("play").classList.add("fa-stop-circle");
    interval = setInterval (tonbeat, 350);
}
  else {
    document.getElementById("play").classList.remove("fa-stop-circle");
    document.getElementById("play").classList.add("fa-play-circle");
    clearInterval(interval);
}
}


function tonbeat(): void {
  playSample(BEAT[index]);
  index++;
  if (index == 3) { index = 0; } 
}


/*Funktion für Remix: alle 9 Sounds werden zufällig abgespielt*/
function REMIX (): void {
  remix = setInterval(playRemix, 700);
  function playRemix(): void {
      for (var i1: number = 0; i1 < 4; i1++) {
        var i2: number = Math.floor(Math.random() * 9);
        playSample (TON[i2]);
    }
  }

}


/*Funktion für Delete-Button*/
function deletebutton (): void {
  document.getElementById("trash").classList.contains("fa-trash-alt");
  clearInterval(interval);
  clearInterval(remix);
}



/*Bonusaufgabe Aufgabe 7: Verlinkung Sounds zu Tastatur*/
document.addEventListener("keydown", function(tastatur: KeyboardEvent): void {
  
  if (tastatur.key == "1") {
    playSample(TON[0]); }
  else if (tastatur.key == "2") {
    playSample(TON[1]); 
  }
  else if (tastatur.key == "3") {
    playSample(TON[2]);
  }
  else if (tastatur.key == "4") {
    playSample(TON[3]);
  }
  else if (tastatur.key == "5") {
    playSample(TON[4]);
  }
  else if (tastatur.key == "6") {
    playSample(TON[5]);
  }
  else if (tastatur.key == "7") {
    playSample(TON[6]);
  }
  else if (tastatur.key == "8") {
    playSample(TON[7]);
  }
  else if (tastatur.key == "9") {
    playSample(TON[8]);
}



});
}); }
