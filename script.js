const fahrenheitInput = document.querySelector('#input-fahr');
const celciusInput = document.querySelector('#input-celc');
const invalidChars = ['e', '+'];
const preventLetterE = function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

fahrenheitInput.addEventListener('keydown', preventLetterE);
celciusInput.addEventListener('keydown', preventLetterE);

fahrenheitInput.addEventListener('input', function() {
  celciusInput.value = convert.fahrenheitToC(fahrenheitInput.value);
});

celciusInput.addEventListener('input', function() {
  fahrenheitInput.value = convert.celciusToF(celciusInput.value);
});

const convert = {
  celciusToF: function (celc) {
    let fahrenheit =  celc * 1.8 + 32;
    return fahrenheit.toFixed(1);
  },
  fahrenheitToC: function (fahr) {
    let celcius =  (fahr - 32) / 1.8;
    return celcius.toFixed(1);
  }
}

