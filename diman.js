function Fraction(numeratorNumber, numeratorUnit, denominatorNumber, denominatorUnit) {
  this.numeratorNumber = numeratorNumber;
  this.numeratorUnit = numeratorUnit;
  this.denominatorNumber = denominatorNumber;
  this.denominatorUnit = denominatorUnit;
  
  this.reciprical = function() {
    var inverse = new fraction(denominatorNumber, denominatorUnit, numeratorNumber, numeratorUnit);
    return inverse;
    }
  
  this.htmlString = function() {
    str = '<div class="fraction"><div class="numerator"><div class="number">';
    str += numeratorNumber;
    str += '</div><div class="unit">';
    str += numeratorUnit;
    str += '</div></div><div class="denominator"><div class="number">';
    str += denominatorNumber;
    str += '</div><div class="unit">';
    str += denominatorUnit;
    str += '</div></div></div>';
    return str;
  }
  
}

function addFraction(fraction, elementID) {
  var el = document.getElementById(elementID);
  el.innerHTML += fraction.htmlString();
}

function getFractionFromHTML(fractionElement) {
  var numerator = fractionElement.getElementByTagName("numerator");
  var numeratorNumber = Number(numerator.getElementByTagName("number"));
  var numeratorUnit = numerator.getElementByTagName("unit");
  var denominator = fractionElement.getElementByTagName("denominator");
  var denominatorNumber = Number(denominator.getElementByTagName("number"));
  var denominatorUnit = denominator.getElementByTagName("unit");
  return new Fraction(numeratorNumber, numeratorUnit, denominatorNumber, denominatorUnit);
}




// Distances

var millimetersmeters = new Fraction(1000, "millimeters", 1, "meters");
var centermetersmeters = new Fraction(100, "centimeters", 1, "meters");
var decimetersmeters = new Fraction(10, "decimeters", 1, "meters");
var dekametersmeters = new Fraction(1, "dekameters", 10, "meters");
var kilometersmeters = new Fraction(1, "kilometer", 1000, "meters");

var inchesfeet = new Fraction(12, "inches", 1, "feet");
var feetyards = new Fraction(3, "feet", 1, "yards");
var feetmiles = new Fraction(5280, "feet", 1, "miles");

var feetmeters = new Fraction(1, "meters", 3.28, "feet");
var mileskilometers = new Fraction(1, "miles", 1.609, "kilometers");

var distances = [millimetersmeters, centermetersmeters, decimetersmeters, dekametersmeters, kilometersmeters, inchesfeet, feetyards, feetmiles, feetmeters, mileskilometers];


// Volumes

var quartsgallons = new Fraction(4, "quarts", 1, "gallons");
var pintsgallons = new Fraction(8, "pints", 1, "gallons");
var ouncepints = new Fraction(1, "pints", 16, "ounces");
var litersquarts = new Fraction(1, "quarts", 0.946, "liters");

var volumes = [quartsgallons, pintsgallons, ouncepints, litersquarts];

// Times
var daysyears = new Fraction(1, "years", 365, "days");
var hoursdays = new Fraction(1, "days", 24, "hours");
var minuteshours = new Fraction (1, "hours", 60, "minutes");
var secondsminutes = new Fraction (1, "minutes", 60, "seconds");

var times = [daysyears, hoursdays, minuteshours, secondsminutes];


function populateList(listName, array) {
  var el = document.getElementById(listName);
  for (var i = 0; i < array.length; i++) {
    var str = array[i].htmlString();
    str += "<div class='buttonbox'>";
    str += "<button class='invert' onclick=invert(this)></button>";
    str += "<button class='add' onlick=add(this)></button>";
    str += "</div>"
    el.innerHTML += str;
  }
}

populateList("distances", distances);

populateList("volumes", volumes);

populateList("times", times);
 