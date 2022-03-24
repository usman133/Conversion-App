document.getElementById("celciusInput").addEventListener("input", e => {
    let celcius = e.target.value;
    document.getElementById("fahrenOutput").innerHTML = (celcius * 1.8) + 32;
  })

