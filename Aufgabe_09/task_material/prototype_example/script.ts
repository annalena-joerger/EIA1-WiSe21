namespace A09 {
window.addEventListener("load", function(): void {

/*Deklaration der Variablen*/
let addToDoButton: HTMLElement = document.getElementById("addToDo");
let toDoContainer: HTMLElement = document.getElementById("toDoContainer");
let inputField: HTMLInputElement = document.getElementById("inputField");
let index: number = 0;

/*Funktion für den Zähler der To Do's*/
function total (): void {
    document.querySelector("#total").innerHTML = String(index); 
}

addToDoButton.addEventListener("click", function(): void {
    index++;
    total ();

    /*Textfelder für neue To Do's*/
    let paragraph: HTMLElement = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);

    /*Kreis, wo man Aufgabe abhaken kann*/
    const kreiszumabhaken: HTMLElement = document.createElement("div");
    kreiszumabhaken.setAttribute ("class", "far fa-circle");
    toDoContainer.appendChild (kreiszumabhaken);

    /*Haken, um Aufgabe abzuhaken*/
    let haken: HTMLElement = document.createElement ("button");
    haken.setAttribute ("class", "fas fa-check");
    toDoContainer.appendChild (haken);

    /*Mülleimer, um Aufgabe aus Liste zu löschen*/
    const aufgabelöschen: HTMLElement = document.createElement ("button");
    aufgabelöschen.setAttribute ("class", "fas fa-trash-alt");
    toDoContainer.appendChild (aufgabelöschen);


    /*Eingabefeld leeren*/
    inputField.value = "";

    
    /*Bei Klick auf Mülleimer wird Aufgabe von To Do-Liste gelöscht und im Zähler wird eine Aufgabe abgezogen*/
    aufgabelöschen.addEventListener("click", function (): void { toDoContainer.removeChild(paragraph); toDoContainer.removeChild(haken); toDoContainer.removeChild(aufgabelöschen); toDoContainer.removeChild(kreiszumabhaken); index--; total(); });
    
    /*Bei Klick wird die Aufgabe abgehakt*/
    haken.addEventListener("click", function (): void {if (haken.style.opacity != "100%") {haken.style.opacity = "100%"; 
    }});


});
}); }
