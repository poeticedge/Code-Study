const userInput = document.getElementById("user-input");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

const meterToFeet = Math.round(3.281);
const literToGallon = Math.round(3.785);
const kiloToPound = Math.round(2.205);

userInput.addEventListener("input", function () {
  let input = userInput.value;

  length.textContent = `${input} meter = ${input * meterToFeet} feet | ${
    meterToFeet / input
  } feet = ${input} meter`;

  volume.textContent = `${input} liter = ${input / literToGallon} gallon | ${
    input * literToGallon
  } gallons = ${input} liter`;

  mass.textContent = `${input} kilos = ${input * kiloToPound} pounds | ${
    kiloToPound / input
  } pounds = ${input} kilos`;
});

//All formulas: first formula is right, second is still wrong
//also math.random is rounding down 1, making number inaccurate

//function displayResults() {
//len.textContent = lenConv()
//vol.textContent = volConv()
// mass.textContent = massConv()
//return(displayResults)
//}

//function lenConv() { //length conversion
// feet = (len * 3.2808398950131).toFixed(3) //meter to feet
// meter = (len * 0.3048).toFixed(3) //feet to meter

// len.textContent = len + " meters = " + feet + " feet | " + len + " feet = " + meter + " meters"  //output for length
//}

//Where did number to convert come from? Is this the correct way to perform these conversions
//Math.round(lengthResult) wouldnt lengthResult be the value we would pass through for rounding?
//    function roundNum() {
//    var d = 3.5;
//    document.getElementById("demo").innerHTML = Math.round(d);
//}
//var numb = 123.23454;
//numb = numb.toFixed(2); seeing a lot of to.Fixed for rounding. Change 2 to 3
//const roundValue = "displayResults"
//(Math.round(displayResults));
