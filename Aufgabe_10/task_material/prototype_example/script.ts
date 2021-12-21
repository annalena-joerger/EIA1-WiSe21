namespace A09 {
// tslint:disable-next-line: no-any
declare var Artyom: any;

window.addEventListener("load", function(): void {

/*Deklaration der Variablen*/
let toDoContainer: HTMLElement = document.getElementById("toDoContainer");
let inputField: HTMLInputElement = document.querySelector("#eingabefeld");
let index: number = 0;
let opentasks: number = 0;
let donetasks: number = 0;

const artyom: any = new Artyom();


/*Funktion für den Zähler der gesamten To Do's*/
function total (): void {
    document.querySelector("#total").innerHTML = String(index); 
}

/*Funktion für den Zähler der offenen Aufgaben*/
function open (): void {
    document.querySelector("#open").innerHTML = String(opentasks);
}

/*Funktion für den Zähler der beendeten Aufgaben*/
function done (): void {
    document.querySelector("#done").innerHTML = String(donetasks);
}



/*Spracheingabe Artyom*/
artyom.addCommands({
    indexes: ["erstelle Aufgabe *"],
    smart: true,
    // tslint:disable-next-line: no-any
    action: function (i: any, wildcard: string): void {
        /*Neues To Do wird erstellt, wenn man "erstelle Aufgabe ..." sagt*/
        console.log("Erstellte Aufgabe: " + wildcard);
        let paragraph: HTMLElement = document.createElement("p");
        paragraph.classList.add("paragraph-styling");
        paragraph.innerHTML = wildcard;
        toDoContainer.appendChild(paragraph);

        /*Zähler der gesamten Aufgabe und Zähler der offenen Aufgabe erhöht sich um eins*/
        index++;
        total();
        opentasks++;
        open();
        
        /*Haken, um Aufgabe abzuhaken -je nachdem ändert sich Zähler von den offenen und beendeten Aufgaben*/
        let haken: HTMLElement = document.createElement ("button");
        haken.className = "far fa-circle";
        toDoContainer.appendChild (haken);
        haken.addEventListener("click", abgehakteToDos);
        function abgehakteToDos (): void {
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
        let aufgabelöschen: HTMLElement = document.createElement ("button");
        aufgabelöschen.setAttribute ("class", "fas fa-trash-alt");
        toDoContainer.appendChild (aufgabelöschen);
        aufgabelöschen.addEventListener("click", deleteToDo);
        /*Funktion, um Aufgabe bei Klick auf Mülleimer zu löschen*/
        function deleteToDo (): void {
            toDoContainer.removeChild(aufgabelöschen); 
            toDoContainer.removeChild(paragraph);
            toDoContainer.removeChild(haken);
            index--;
            total();
            
            /*Veränderung der Zähler, je nachdem ob Aufgabe beim löschen abgehakt ist oder nicht*/
            if (haken.getAttribute("class") == "far fa-check-circle") {
                donetasks--;
                done();
            } else {
                opentasks--;
                open();
            }
        }
    }
});

function startContinuousArtyom(): void {
    artyom.fatality();

    setTimeout(
        function (): void {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function (): void {
                console.log("Ready!");
            });
        },
        250);
}
/*Spracheingabe durch Klick auf Button möglich*/
document.querySelector("#spracheingabe").addEventListener("click", function (): void {
    startContinuousArtyom();
});



document.addEventListener("keydown", (event: KeyboardEvent): void => { 
    if (event.keyCode === 13) { 
            if (document.querySelector("input").value != "") { addtodo(); document.querySelector("input").value = ""; } 
            else {alert("Add your new task!"); }}});




function addtodo(): void {
    index++;
    total ();
    opentasks++;
    open ();


    
    /*Textfelder für neue To Do's*/
    let paragraph: HTMLElement = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);


    /*Haken, um Aufgabe abzuhaken*/
    let haken: HTMLElement = document.createElement ("button");
    haken.className = "far fa-circle";
    toDoContainer.appendChild (haken);

    /*Mülleimer, um Aufgabe aus Liste zu löschen*/
    const aufgabelöschen: HTMLElement = document.createElement ("button");
    aufgabelöschen.setAttribute ("class", "fas fa-trash-alt");
    toDoContainer.appendChild (aufgabelöschen);


    /*Eingabefeld leeren*/
    inputField.value = "";
    

    aufgabelöschen.addEventListener("click", deleteToDo);
    /*Funktion, um Aufgabe bei Klick auf Mülleimer zu löschen*/
    function deleteToDo (): void {
            toDoContainer.removeChild(aufgabelöschen); 
            toDoContainer.removeChild(paragraph);
            toDoContainer.removeChild(haken);
            index--;
            total();
            
            /*Veränderung der Zähler, je nachdem ob Aufgabe beim löschen abgehakt ist oder nicht*/
            if (haken.getAttribute("class") == "far fa-check-circle") {
                donetasks--;
                done();
            } else {
                opentasks--;
                open();
            }
        }

    
    /*Funktion, um To Dos abzuhaken. Der Zähler für offene und beendete Aufgaben ändert sich je nachdem, ob die Aufgabe abgehakt ist oder nicht*/
    haken.addEventListener("click", abgehakteToDos);
    function abgehakteToDos (): void {
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
    
       
}); }
