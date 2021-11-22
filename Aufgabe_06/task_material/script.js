var L06;
(function (L06) {
    /*Afrika*/
    var LandAF = "Africa";
    var Africa_2008 = 1028;
    var Africa_2018 = 1235.5;
    /*Südamerika*/
    var LandSA = "South America";
    var SouthAmerica_2008 = 1132.6;
    var SouthAmerica_2018 = 1261.5;
    /*Europa*/
    var LandEU = "Europe";
    var Europe_2008 = 4965.7;
    var Europe_2018 = 4209.3;
    /*Nordamerika*/
    var LandNA = "North America";
    var NorthAmerica_2008 = 6600.4;
    var NorthAmerica_2018 = 6035.6;
    /*Asien*/
    var LandAS = "Asia";
    var Asia_2008 = 12954.7;
    var Asia_2018 = 16274.1;
    /*Australien*/
    var LandAU = "Australia";
    var Australia_2008 = 1993;
    var Australia_2018 = 2100.5;
    /*Welt 2018 gesamt*/
    var Welt_2018 = Africa_2018 + SouthAmerica_2018 + Europe_2018 + NorthAmerica_2018 + Asia_2018 + Australia_2018;
    /*Berechnung Afrika*/
    var africa1 = (100 / Welt_2018) * Africa_2018;
    var africa2 = ((100 / Africa_2008) * Africa_2018) - 100;
    var africa3 = Africa_2018 - Africa_2008;
    /*Berechnung Südamerika*/
    var sa1 = (100 / Welt_2018) * SouthAmerica_2018;
    var sa2 = ((100 / SouthAmerica_2008) * SouthAmerica_2018) - 100;
    var sa3 = SouthAmerica_2018 - SouthAmerica_2008;
    /*Berechnung Europa*/
    var eu1 = (100 / Welt_2018) * Europe_2018;
    var eu2 = ((100 / Europe_2008) * Europe_2018) - 100;
    var eu3 = Europe_2018 - Europe_2008;
    /*Berechnung Nordamerika*/
    var na1 = (100 / Welt_2018) * NorthAmerica_2018;
    var na2 = ((100 / NorthAmerica_2008) * NorthAmerica_2018) - 100;
    var na3 = NorthAmerica_2018 - NorthAmerica_2008;
    /*Berechnung Asien*/
    var asia1 = (100 / Welt_2018) * Asia_2018;
    var asia2 = ((100 / Asia_2008) * Asia_2018) - 100;
    var asia3 = Asia_2018 - Asia_2008;
    /*Berechnung Australien*/
    var au1 = (100 / Welt_2018) * Australia_2018;
    var au2 = ((100 / Australia_2008) * Australia_2018) - 100;
    var au3 = Australia_2018 - Australia_2008;
    /*Rechnungen für Kontinente*/
    function Kontinent(Land, Land_2018, Land_2008) {
        document.querySelector(".namekontinent").innerHTML = Land;
        document.querySelector(".absolute").innerHTML = Land;
        document.querySelector(".emissionabsolute").innerHTML = Land_2018.toFixed(2);
        document.querySelector(".emissionrelative").innerHTML = (Land_2018 / Welt_2018 * 100).toFixed(2) + "%";
        document.querySelector(".growthrateinpercent").innerHTML = ((Land_2018 / Land_2008 - 1) * 100).toFixed(2) + "%";
        document.querySelector(".growthrateabsolute").innerHTML = (Land_2018 - Land_2008).toFixed(2);
        document.querySelector(".Balkendiagramm").style.height = (Land_2018 / Welt_2018 * 100) + "%";
    }
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () { Kontinent(LandEU, Europe_2018, Europe_2008); });
        document.querySelector(".northamerica").addEventListener("click", function () { Kontinent(LandNA, NorthAmerica_2018, NorthAmerica_2008); });
        document.querySelector(".southamerica").addEventListener("click", function () { Kontinent(LandSA, SouthAmerica_2018, SouthAmerica_2008); });
        document.querySelector(".africa").addEventListener("click", function () { Kontinent(LandAF, Africa_2018, Africa_2008); });
        document.querySelector(".asia").addEventListener("click", function () { Kontinent(LandAS, Asia_2018, Asia_2008); });
        document.querySelector(".australia").addEventListener("click", function () { Kontinent(LandAU, Australia_2018, Australia_2008); });
    });
})(L06 || (L06 = {}));
//# sourceMappingURL=script.js.map