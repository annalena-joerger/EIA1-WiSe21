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
function Kontinent (Land: string, Land_2018: number, Land_2008: number) {
document.querySelector(".namekontinent").innerHTML = Land;
document.querySelector(".absolute").innerHTML = Land;
document.querySelector(".emissionabsolute").innerHTML = Land_2018.toFixed(2);
document.querySelector(".emissionrelative").innerHTML = (Land_2018/Welt_2018*100).toFixed(2) + "%";
document.querySelector(".growthrateinpercent").innerHTML = ((Land_2018/Land_2008-1)*100).toFixed(2) + "%";
document.querySelector(".growthrateabsolute").innerHTML = (Land_2018-Land_2008).toFixed(2);
document.querySelector<HTMLElement>(".Balkendiagramm").style.height = (Land_2018/Welt_2018*100) + "%";
}


window.addEventListener ("load", function () {
document.querySelector(".europe").addEventListener("click", function (): void { Kontinent(LandEU, Europe_2018, Europe_2008)});
document.querySelector(".northamerica").addEventListener("click", function (): void { Kontinent(LandNA, NorthAmerica_2018, NorthAmerica_2008)});
document.querySelector(".southamerica").addEventListener("click", function (): void { Kontinent(LandSA, SouthAmerica_2018, SouthAmerica_2008)});
document.querySelector(".africa").addEventListener("click", function (): void { Kontinent(LandAF, Africa_2018, Africa_2008)});
document.querySelector(".asia").addEventListener("click", function (): void { Kontinent(LandAS, Asia_2018, Asia_2008)});
document.querySelector(".australia").addEventListener("click", function (): void { Kontinent(LandAU, Australia_2018, Australia_2008)});
})

}