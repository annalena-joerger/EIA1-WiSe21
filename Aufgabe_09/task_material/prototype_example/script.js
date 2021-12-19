var A09;
(function (A09) {
    window.addEventListener("load", function () {
        /*Deklaration der Variablen*/
        let addToDoButton = document.getElementById("addToDo");
        let toDoContainer = document.getElementById("toDoContainer");
        let inputField = document.getElementById("inputField");
        let index = 0;
        /*Funktion für den Zähler der To Do's*/
        function total() {
            document.querySelector("#total").innerHTML = String(index);
        }
        addToDoButton.addEventListener("click", function () {
            index++;
            total();
            /*Textfelder für neue To Do's*/
            let paragraph = document.createElement("p");
            paragraph.classList.add("paragraph-styling");
            paragraph.innerText = inputField.value;
            toDoContainer.appendChild(paragraph);
            /*Kreis, wo man Aufgabe abhaken kann*/
            const kreiszumabhaken = document.createElement("div");
            kreiszumabhaken.setAttribute("class", "far fa-circle");
            toDoContainer.appendChild(kreiszumabhaken);
            /*Haken, um Aufgabe abzuhaken*/
            let haken = document.createElement("button");
            haken.setAttribute("class", "fas fa-check");
            toDoContainer.appendChild(haken);
            /*Mülleimer, um Aufgabe aus Liste zu löschen*/
            const aufgabelöschen = document.createElement("button");
            aufgabelöschen.setAttribute("class", "fas fa-trash-alt");
            toDoContainer.appendChild(aufgabelöschen);
            /*Eingabefeld leeren*/
            inputField.value = "";
            /*Bei Klick auf Mülleimer wird Aufgabe von To Do-Liste gelöscht und im Zähler wird eine Aufgabe abgezogen*/
            aufgabelöschen.addEventListener("click", function () { toDoContainer.removeChild(paragraph); toDoContainer.removeChild(haken); toDoContainer.removeChild(aufgabelöschen); toDoContainer.removeChild(kreiszumabhaken); index--; total(); });
            /*Bei Klick wird die Aufgabe abgehakt*/
            haken.addEventListener("click", function () {
                if (haken.style.opacity != "100%") {
                    haken.style.opacity = "100%";
                }
            });
            /*
            haken.addEventListener("click", erledigteToDos);
            function erledigteToDos (): void {
                    if (haken.getAttribute("class") == "far fa-check-circle") {
                        haken.setAttribute("class", "far fa-circle"); }
                    else {
                        haken.setAttribute("class", "far fa-check-circle");
                    }
                }
            */
        });
    });
})(A09 || (A09 = {}));
//# sourceMappingURL=script.js.map