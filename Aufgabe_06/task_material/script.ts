namespace L06 {

/*Afrika*/
var LandAF: string = "Africa";
var Africa_2008 : number = 1028;
var Africa_2018 : number = 1235.5;

/*Südamerika*/
var LandSA: string = "South America";
var SouthAmerica_2008 : number = 1132.6;
var SouthAmerica_2018 : number = 1261.5;

/*Europa*/
var LandEU: string = "Europe";
var Europe_2008 : number = 4965.7;
var Europe_2018 : number = 4209.3;

/*Nordamerika*/
var LandNA: string = "North America";
var NorthAmerica_2008 : number = 6600.4;
var NorthAmerica_2018 : number = 6035.6;

/*Asien*/
var LandAS: string = "Asia";
var Asia_2008 : number = 12954.7;
var Asia_2018 : number = 16274.1;

/*Australien*/
var LandAU: string = "Australia";
var Australia_2008 : number = 1993;
var Australia_2018 : number = 2100.5;

/*Welt 2018 gesamt*/
var Welt_2018 : number = Africa_2018 + SouthAmerica_2018 + Europe_2018 + NorthAmerica_2018 + Asia_2018 + Australia_2018;


/*Berechnung Afrika*/
var africa1 : number = (100 / Welt_2018) * Africa_2018; 
var africa2 : number = ((100 / Africa_2008) * Africa_2018) - 100;
var africa3 : number = Africa_2018 - Africa_2008;

/*Berechnung Südamerika*/
var sa1 : number = (100 / Welt_2018) * SouthAmerica_2018; 
var sa2 : number = ((100 / SouthAmerica_2008) * SouthAmerica_2018) - 100;
var sa3 : number = SouthAmerica_2018 - SouthAmerica_2008;

/*Berechnung Europa*/
var eu1 : number = (100 / Welt_2018) * Europe_2018; 
var eu2 : number = ((100 / Europe_2008) * Europe_2018) - 100;
var eu3 : number = Europe_2018 - Europe_2008;

/*Berechnung Nordamerika*/
var na1 : number = (100 / Welt_2018) * NorthAmerica_2018; 
var na2 : number = ((100 / NorthAmerica_2008) * NorthAmerica_2018) - 100;
var na3 : number = NorthAmerica_2018 - NorthAmerica_2008;

/*Berechnung Asien*/
var asia1 : number = (100 / Welt_2018) * Asia_2018; 
var asia2 : number = ((100 / Asia_2008) * Asia_2018) - 100;
var asia3 : number = Asia_2018 - Asia_2008;

/*Berechnung Australien*/
var au1 : number = (100 / Welt_2018) * Australia_2018; 
var au2 : number = ((100 / Australia_2008) * Australia_2018) - 100;
var au3 : number = Australia_2018 - Australia_2008;


/*Rechnungen für Kontinente*/
function AF (LandAF: string, Africa_2018: number, Africa_2008: number) {
document.querySelector(".namekontinent").innerHTML = LandAF;
document.querySelector(".absolute").innerHTML = LandAF;
document.querySelector(".emissionabsolute").innerHTML = Africa_2018.toFixed(2);
document.querySelector(".emissionrelative").innerHTML = (Africa_2018/Welt_2018*100).toFixed(2) + "%";
document.querySelector(".growthrateinpercent").innerHTML = ((Africa_2018/Africa_2008-1)*100).toFixed(2) + "%";
document.querySelector(".growthrateabsolute").innerHTML = (Africa_2018-Africa_2008).toFixed(2);
document.querySelector<HTMLElement>(".Balkendiagramm").style.height = (Africa_2018/Welt_2018*100) + "%";
}

function EU (LandEU: string, Europe_2018: number, Europe_2008: number) {
document.querySelector(".namekontinent").innerHTML = LandEU;
document.querySelector(".absolute").innerHTML = LandEU;
document.querySelector(".emissionabsolute").innerHTML = Europe_2018.toFixed(2);
document.querySelector(".emissionrelative").innerHTML = (Europe_2018/Welt_2018*100).toFixed(2) + "%";
document.querySelector(".growthrateinpercent").innerHTML = ((Europe_2018/Europe_2008-1)*100).toFixed(2) + "%";
document.querySelector(".growthrateabsolute").innerHTML = (Europe_2018-Europe_2008).toFixed(2);
document.querySelector<HTMLElement>(".Balkendiagramm").style.height = (Europe_2018/Welt_2018*100) + "%";
}

function NA (LandNA: string, NorthAmerica_2018: number, NorthAmerica_2008: number) {
document.querySelector(".namekontinent").innerHTML = LandNA;
document.querySelector(".absolute").innerHTML = LandNA;
document.querySelector(".emissionabsolute").innerHTML = NorthAmerica_2018.toFixed(2);
document.querySelector(".emissionrelative").innerHTML = (NorthAmerica_2018/Welt_2018*100).toFixed(2) + "%";
document.querySelector(".growthrateinpercent").innerHTML = ((NorthAmerica_2018/NorthAmerica_2008-1)*100).toFixed(2) + "%";
document.querySelector(".growthrateabsolute").innerHTML = (NorthAmerica_2018-NorthAmerica_2008).toFixed(2);
document.querySelector<HTMLElement>(".Balkendiagramm").style.height = (NorthAmerica_2018/Welt_2018*100) + "%";
}

function SA (LandSA: string, SouthAmerica_2018: number, SouthAmerica_2008: number) {
document.querySelector(".namekontinent").innerHTML = LandSA;
document.querySelector(".absolute").innerHTML = LandSA;
document.querySelector(".emissionabsolute").innerHTML = SouthAmerica_2018.toFixed(2);
document.querySelector(".emissionrelative").innerHTML = (SouthAmerica_2018/Welt_2018*100).toFixed(2) + "%";
document.querySelector(".growthrateinpercent").innerHTML = ((SouthAmerica_2018/SouthAmerica_2008-1)*100).toFixed(2) + "%";
document.querySelector(".growthrateabsolute").innerHTML = (SouthAmerica_2018-SouthAmerica_2008).toFixed(2);
document.querySelector<HTMLElement>(".Balkendiagramm").style.height = (SouthAmerica_2018/Welt_2018*100) + "%";
}

function AS (LandAS: string, Asia_2018: number, Asia_2008: number) {
document.querySelector(".namekontinent").innerHTML = LandAS;
document.querySelector(".absolute").innerHTML = LandAS;
document.querySelector(".emissionabsolute").innerHTML = Asia_2018.toFixed(2);
document.querySelector(".emissionrelative").innerHTML = (Asia_2018/Welt_2018*100).toFixed(2) + "%";
document.querySelector(".growthrateinpercent").innerHTML = ((Asia_2018/Asia_2008-1)*100).toFixed(2) + "%";
document.querySelector(".growthrateabsolute").innerHTML = (Asia_2018-Asia_2008).toFixed(2);
document.querySelector<HTMLElement>(".Balkendiagramm").style.height = (Asia_2018/Welt_2018*100) + "%";
}

function AU (LandAU: string, Australia_2018: number, Australia_2008: number) {
document.querySelector(".namekontinent").innerHTML = LandAU;
document.querySelector(".absolute").innerHTML = LandAU;
document.querySelector(".emissionabsolute").innerHTML = Australia_2018.toFixed(2);
document.querySelector(".emissionrelative").innerHTML = (Australia_2018/Welt_2018*100).toFixed(2) + "%";
document.querySelector(".growthrateinpercent").innerHTML = ((Australia_2018/Australia_2008-1)*100).toFixed(2) + "%";
document.querySelector(".growthrateabsolute").innerHTML = (Australia_2018-Australia_2008).toFixed(2);
document.querySelector<HTMLElement>(".Balkendiagramm").style.height = (Australia_2018/Welt_2018*100) + "%";
}




window.addEventListener ("load", function () {
document.querySelector(".europe").addEventListener("click", function (): void { EU(LandEU, Europe_2018, Europe_2008)});
document.querySelector(".northamerica").addEventListener("click", function (): void { NA(LandNA, NorthAmerica_2018, NorthAmerica_2008)});
document.querySelector(".southamerica").addEventListener("click", function (): void { SA(LandSA, SouthAmerica_2018, SouthAmerica_2008)});
document.querySelector(".africa").addEventListener("click", function (): void { AF(LandAF, Africa_2018, Africa_2008)});
document.querySelector(".asia").addEventListener("click", function (): void { AS(LandAS, Asia_2018, Asia_2008)});
document.querySelector(".australia").addEventListener("click", function (): void { AU(LandAU, Australia_2018, Australia_2008)});
})

}