//Temperature
//Celcius to Fahrenheit
document.getElementById("celciusInput").addEventListener("input", e => {
    let celcius = e.target.value;
    document.getElementById("fahrenheitOutput").innerHTML = (celcius * 1.8) + 32;
  })

