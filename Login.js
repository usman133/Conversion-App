// Loop through Array of Students
var Students = [
	{ // Object @ 0 index
		username: "student",
		password: "welcome123"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

] 



function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < Students.length; i++) {
		// checks if user input matches username and password of a current index of the Students array
		if(username == Students[i].username && password == Students[i].password) {
			window.location.replace("Conversion App.html");
            // stops the function if this is found to be true
            return
        }
        
	}
    alert("Incorrect username or password");
}
	


