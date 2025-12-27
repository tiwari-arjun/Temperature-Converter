
function convertTemperature(){
let inputTemp = parseFloat(document.getElementById("temperatureInput").value);
let fromUnit = document.getElementById("fromUnit").value;
let toUnit = document.getElementById("toUnit").value;
let resultElement = document.getElementById("resultOutput");


if(isNaN(inputTemp)){
  resultElement.textContent = "Enter a valid Number";
  return;
}

// Convert it to Celsuis First
let ABSOLUTE_ZERO_C  = -273.15;
let tempInC;

if(fromUnit === 'C'){
  tempInC = inputTemp;
}
else if(fromUnit === 'F'){
   tempInC = (inputTemp - 32) * 5 / 9;
}
else if(fromUnit ==='K'){
 tempInC = inputTemp - 273.15;
}

if(tempInC < ABSOLUTE_ZERO_C - 0.01){
  resultElement.textContent = `Temperature cannot be below Absolute Zero! `
  return;
}
let resultTemp;

// Converting c into desire temperature

if(toUnit === 'C'){
  resultTemp = tempInC;
}

else if(toUnit === 'F'){
  resultTemp = (tempInC * 9 / 5) + 32;
}
else if(toUnit === 'K'){
  resultTemp = tempInC + 273.15;
}

const formattedResult = resultTemp.toFixed(2);
            let unitSymbol;

            if(toUnit === 'C'){
              unitSymbol = '°C';
            }else if (toUnit === 'F') {
                unitSymbol = '°F';
            } else if (toUnit === 'K') {
                unitSymbol = 'K';
            }

  resultElement.textContent = `${formattedResult} ${unitSymbol}`;

}

 window.onload = function() {
            convertTemperature();
        };