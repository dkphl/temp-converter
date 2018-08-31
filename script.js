const fahrenheitInput = document.querySelector("#input-fahr");
const celciusInput = document.querySelector("#input-celc");

const convert = {
  celciusToF: function (celc) {
    let fahrenheit =  celc * 1.8 + 32;
    console.log(typeof fahrenheit.toFixed(1));
    
    return fahrenheit.toFixed(1);

  },
  fahrenheitToC: function (fahr) {
    let celcius =  (fahr - 32) / 1.8;
    return celcius.toFixed(1);
  }
}



console.log(fahrenheitInput);
console.log(convert.celciusToF(32));
console.log(convert.fahrenheitToC(98));