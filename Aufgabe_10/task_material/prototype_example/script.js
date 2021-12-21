var A09;
(function (A09) {
    window.addEventListener("load", function () {
        /*Deklaration der Variablen*/
        let toDoContainer = document.getElementById("toDoContainer");
        let inputField = document.querySelector("#eingabefeld");
        let index = 0;
        let opentasks = 0;
        let donetasks = 0;
        const artyom = new Artyom();
        /*Funktion für den Zähler der gesamten To Do's*/
        function total() {
            document.querySelector("#total").innerHTML = String(index);
        }
        /*Funktion für den Zähler der offenen Aufgaben*/
        function open() {
            document.querySelector("#open").innerHTML = String(opentasks);
        }
        /*Funktion für den Zähler der beendeten Aufgaben*/
        function done() {
            document.querySelector("#done").innerHTML = String(donetasks);
        }
        /*Spracheingabe Artyom*/
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            // tslint:disable-next-line: no-any
            action: function (i, wildcard) {
                /*Neues To Do wird erstellt, wenn man "erstelle Aufgabe ..." sagt*/
                console.log("Erstellte Aufgabe: " + wildcard);
                let paragraph = document.createElement("p");
                paragraph.classList.add("paragraph-styling");
                paragraph.innerHTML = wildcard;
                toDoContainer.appendChild(paragraph);
                /*Zähler der gesamten Aufgabe und Zähler der offenen Aufgabe erhöht sich um eins*/
                index++;
                total();
                opentasks++;
                open();
                /*Haken, um Aufgabe abzuhaken -je nachdem ändert sich Zähler von den offenen und beendeten Aufgaben*/
                let haken = document.createElement("button");
                haken.className = "far fa-circle";
                toDoContainer.appendChild(haken);
                haken.addEventListener("click", abgehakteToDos);
                function abgehakteToDos() {
                    if (haken.getAttribute("class") == "far fa-check-circle") {
                        haken.setAttribute("class", "far fa-circle");
                        opentasks++;
                        open();
                        donetasks--;
                        done();
                    }
                    else {
                        haken.setAttribute("class", "far fa-check-circle");
                        opentasks--;
                        open();
                        donetasks++;
                        done();
                    }
                }
                /*Mülleimer, um Aufgabe zu löschen*/
                let aufgabelöschen = document.createElement("button");
                aufgabelöschen.setAttribute("class", "fas fa-trash-alt");
                toDoContainer.appendChild(aufgabelöschen);
                aufgabelöschen.addEventListener("click", deleteToDo);
                /*Funktion, um Aufgabe bei Klick auf Mülleimer zu löschen*/
                function deleteToDo() {
                    toDoContainer.removeChild(aufgabelöschen);
                    toDoContainer.removeChild(paragraph);
                    toDoContainer.removeChild(haken);
                    index--;
                    total();
                    /*Veränderung der Zähler, je nachdem ob Aufgabe beim löschen abgehakt ist oder nicht*/
                    if (haken.getAttribute("class") == "far fa-check-circle") {
                        donetasks--;
                        done();
                    }
                    else {
                        opentasks--;
                        open();
                    }
                }
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        /*Spracheingabe durch Klick auf Button möglich*/
        document.querySelector("#spracheingabe").addEventListener("click", function () {
            startContinuousArtyom();
        });
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                if (document.querySelector("input").value != "") {
                    addtodo();
                    document.querySelector("input").value = "";
                }
                else {
                    alert("Add your new task!");
                }
            }
        });
        function addtodo() {
            index++;
            total();
            opentasks++;
            open();
            /*Textfelder für neue To Do's*/
            let paragraph = document.createElement("p");
            paragraph.classList.add("paragraph-styling");
            paragraph.innerText = inputField.value;
            toDoContainer.appendChild(paragraph);
            /*Haken, um Aufgabe abzuhaken*/
            let haken = document.createElement("button");
            haken.className = "far fa-circle";
            toDoContainer.appendChild(haken);
            /*Mülleimer, um Aufgabe aus Liste zu löschen*/
            const aufgabelöschen = document.createElement("button");
            aufgabelöschen.setAttribute("class", "fas fa-trash-alt");
            toDoContainer.appendChild(aufgabelöschen);
            /*Eingabefeld leeren*/
            inputField.value = "";
            aufgabelöschen.addEventListener("click", deleteToDo);
            /*Funktion, um Aufgabe bei Klick auf Mülleimer zu löschen*/
            function deleteToDo() {
                toDoContainer.removeChild(aufgabelöschen);
                toDoContainer.removeChild(paragraph);
                toDoContainer.removeChild(haken);
                index--;
                total();
                /*Veränderung der Zähler, je nachdem ob Aufgabe beim löschen abgehakt ist oder nicht*/
                if (haken.getAttribute("class") == "far fa-check-circle") {
                    donetasks--;
                    done();
                }
                else {
                    opentasks--;
                    open();
                }
            }
            /*Funktion, um To Dos abzuhaken. Der Zähler für offene und beendete Aufgaben ändert sich je nachdem, ob die Aufgabe abgehakt ist oder nicht*/
            haken.addEventListener("click", abgehakteToDos);
            function abgehakteToDos() {
                if (haken.getAttribute("class") == "far fa-check-circle") {
                    haken.setAttribute("class", "far fa-circle");
                    opentasks++;
                    open();
                    donetasks--;
                    done();
                }
                else {
                    haken.setAttribute("class", "far fa-check-circle");
                    opentasks--;
                    open();
                    donetasks++;
                    done();
                }
            }
        }
    });
})(A09 || (A09 = {}));
//# sourceMappingURL=script.js.map