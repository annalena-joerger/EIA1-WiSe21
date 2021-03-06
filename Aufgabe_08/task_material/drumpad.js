var L07;
(function (L07) {
    /*Arrays, in dem alle Töne untergebracht sind*/
    var TON = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"),
        ("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"),
        ("./assets/snare.mp3")];
    var BEAT = [TON[4], TON[5], TON[8]];
    var index = 0;
    var beatremix;
    var interval = 0;
    window.addEventListener("load", function () {
        /*Sounds für Knöpfe*/
        document.querySelector(".Box1").addEventListener("click", function () { playSample(TON[0]); });
        document.querySelector(".Box2").addEventListener("click", function () { playSample(TON[1]); });
        document.querySelector(".Box3").addEventListener("click", function () { playSample(TON[2]); });
        document.querySelector(".Box4").addEventListener("click", function () { playSample(TON[3]); });
        document.querySelector(".Box5").addEventListener("click", function () { playSample(TON[4]); });
        document.querySelector(".Box6").addEventListener("click", function () { playSample(TON[5]); });
        document.querySelector(".Box7").addEventListener("click", function () { playSample(TON[6]); });
        document.querySelector(".Box8").addEventListener("click", function () { playSample(TON[7]); });
        document.querySelector(".Box9").addEventListener("click", function () { playSample(TON[8]); });
        document.querySelector("#play").addEventListener("click", function () { playBeat(BEAT[0]); });
        document.querySelector("#play").addEventListener("click", function () { playBeat(BEAT[1]); });
        document.querySelector("#play").addEventListener("click", function () { playBeat(BEAT[2]); });
        document.querySelector("#random").addEventListener("click", REMIX);
        document.querySelector("#trash").addEventListener("click", deletebutton);
        /*Funktion Töne*/
        function playSample(audio) {
            var ton = new Audio(audio);
            ton.play();
        }
        /*Funktion Beat, wenn man auf Playbutton klickt*/
        function playBeat(audio) {
            var beat = new Audio(audio);
            beat.loop = true;
            if (document.getElementById("play").classList.contains("fa-play-circle")) {
                document.getElementById("play").classList.remove("fa-play-circle");
                document.getElementById("play").classList.add("fa-stop-circle");
                interval = setInterval(tonbeat, 350);
            }
            else {
                document.getElementById("play").classList.remove("fa-stop-circle");
                document.getElementById("play").classList.add("fa-play-circle");
                clearInterval(interval);
            }
            function tonbeat() {
                playSample(BEAT[index]);
                index++;
                if (index == 2) {
                    index = 0;
                }
            }
        }
        function REMIX() {
            clearInterval(interval);
            clearInterval(beatremix);
            if (document.querySelector("#play").getAttribute("class") == "far fa-stop-circle") {
                document.querySelector("#play").setAttribute("class", "far fa-play-circle");
            }
            BEAT = [];
            for (var r = 0; r < 5; r++) {
                BEAT.push(TON[Math.ceil(Math.random() * 6)]);
            }
            beatremix = setInterval(playRemix, 300);
            function playRemix() {
                playSample(BEAT[index]);
                index++;
                if (index == 6) {
                    index = 0;
                }
            }
        }
        /*Funktion für Delete-Button*/
        function deletebutton() {
            document.getElementById("trash").classList.contains("fa-trash-alt");
            clearInterval(beatremix);
            BEAT.length = 0;
        }
        /*Bonusaufgabe Aufgabe 7: Verlinkung Sounds zu Tastatur*/
        document.addEventListener("keydown", function (tastatur) {
            if (tastatur.key == "1") {
                playSample(TON[0]);
            }
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
    });
})(L07 || (L07 = {}));
//# sourceMappingURL=drumpad.js.map