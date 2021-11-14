var Africa_2008 : number = 1028;
var Africa_2018 : number = 1235.5;

var SouthAmerica_2008 : number = 1132.6;
var SouthAmerica_2018 : number = 1261.5;

var Europe_2008 : number = 4965.7;
var Europe_2018 : number = 4209.3;

var NorthAmerica_2008 : number = 6600.4;
var NorthAmerica_2018 : number = 6035.6;

var Asia_2008 : number = 12954.7;
var Asia_2018 : number = 16274.1;

var Australia_2008 : number = 1993;
var Australia_2018 : number = 2100.5;

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


/*Afrika*/
console.log('Die Emission von Afrika ist:' + Africa_2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit' + africa1);
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um' + africa2 + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das' + africa3 + 'kg CO2');

/*Südamerika*/
console.log('Die Emission von Südamerika ist:' + SouthAmerica_2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit' + sa1);
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um' + sa2 + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das' + sa3 + 'kg CO2');

/*Europa*/
console.log('Die Emission von Europa ist:' + Europe_2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + eu1);
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um' + eu2 + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das' + eu3 + 'kg CO2');

/*Nordamerika*/
console.log('Die Emission von Nordamerika ist:' + NorthAmerica_2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit' + na1);
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um' + na2 + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das' + na3 + 'kg CO2');

/*Asien*/
console.log('Die Emission von Asien ist:' + Asia_2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit' + asia1);
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um' + asia2 + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das' + asia3 + 'kg CO2');

/*Australien*/
console.log('Die Emission von Australien ist:' + Australia_2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit' + au1);
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um' + au2 + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das' + au3 + 'kg CO2');