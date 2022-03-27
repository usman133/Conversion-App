//Temperature
//Celcius to Fahrenheit
document.getElementById("celciusInput").addEventListener("input", e => {
    let celcius = e.target.value;
    document.getElementById("fahrenheitOutput").innerHTML = (celcius * 1.8) + 32;
  })

  //Fahrenheit to Celcius
document.getElementById("fahrenheitInput").addEventListener("input", e => {
    let Fahrenheit = e.target.value;
    document.getElementById("celciusOutput").innerHTML = (Fahrenheit - 32) * 0.5555555555555556;
  })

  

  function showDiv(divId, element)
{
    document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';

}
