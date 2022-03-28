//Temperature
//Celcius to Fahrenheit
document.getElementById("celciusInput").addEventListener("input", e => {
    let celcius = e.target.value;
    document.getElementById("fahrenheitOutput").innerHTML = (celcius * 1.8) + 32;
  })

  //Fahrenheit to Celcius
document.getElementById("fahrenheitInput").addEventListener("input", e => {
    let fahrenheit = e.target.value;
    document.getElementById("celciusOutput").innerHTML = (fahrenheit - 32) * 0.5555555555555556;
  })


// Time: 
// 24-hour to 12-hour
let resEle = document.querySelector(".result");
let BtnEle = document.querySelector(".Btn");
let hrEle,minEle;
BtnEle.addEventListener("click", () => {
   hrEle = document.querySelector('.hour').value;
   minEle = document.querySelector('.minute').value;
   if(hrEle>=0 && hrEle<=24 && minEle >=0 && minEle <= 60){
      let AMorPM='AM';
      if(hrEle>12)AMorPM='PM';
      hrEle = (hrEle % 12);
      resEle.innerHTML = 'Time: ' + +hrEle+':'+minEle+' '+AMorPM;
   }
});


// Metrics length to imperial length: 
// Kilometers to miles
  document.getElementById("kmInput").addEventListener("input", e => {
    let km = e.target.value;
    document.getElementById("milesOutput").innerHTML = km * 0.62137;
  })

  
  // Imperial length to mertrics length
  // Miles to kilometers
  document.getElementById("milesInput").addEventListener("input", e => {
    let miles = e.target.value;
    document.getElementById("kmOutput").innerHTML = miles * 1.609344;
  })


  // File sizes  
  // Bytes to appropriate file size
  document.getElementById("bytesInput").addEventListener("input", e => {
    let bytes = e.target.value;

    // Kilobyte (>= 1000)
    if(bytes>=1000 && bytes<1000000){
      document.getElementById("sizeOutput").innerHTML = (bytes / 1000) + ' Kilobyte(s)';
    }

    // Megabyte (>= 1,000,000)
    else if(bytes>=1000000 && bytes<1000000000){
    document.getElementById("sizeOutput").innerHTML = (bytes / 1000000) + ' Megabyte(s)';
    }
    
     // Gigabyte (>= 1,000,000,000)
    else if(bytes>=1000000000 && bytes<8000000000000){
      document.getElementById("sizeOutput").innerHTML = bytes / 1000000000 + ' Gigabyte(s)';
      }

    // Terabyte (>= 1000000000000)
    else if(bytes>=1000000000000){
      document.getElementById("sizeOutput").innerHTML = bytes / 1000000000000 + ' Terabyte(s)';
      }

    // Byte (<1000)
    else{
      document.getElementById("sizeOutput").innerHTML = bytes + ' Byte(s)';
    }
      
  })



    //Collapsible
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
    