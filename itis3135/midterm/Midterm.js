var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
	document.getElementById("show_max").onmouseover = function() {
		showMax();
	}
};

function updateCalorie() {
	var success = false;
	
	try {
		var inputCalories = parseInt(document.getElementById("calorie").value);
		if (!isNaN(inputCalories)) {
			success = true;
		}
		else {
			window.alert("Enter a valid number");
			success = false;
		}
	}
	catch {
		window.alert("Enter a valid number");
		success = false;
	}
	
	if (success) {
		try {
			var day = document.querySelector("input[name='choose-day']:checked").value;
			success = true;
		}
		catch {
			window.alert("Enter a valid day");
			success = false;
		}
	}
	
	if (success) {
		calories[day] = inputCalories;
		document.getElementById("calorie").value = ""
		
		window.alert("Your updated calories details are: " + calories);
	}
}

function showAverageCalories() {
	var sum = 0;
	var count = 0;
	
	for (var i = 0; i < days.length; i++) {
		sum = sum + parseInt(calories[i]);
		count++;
	}
	
	var average = parseInt(sum / count);
	
	document.getElementById("value").innerHTML = average;
	document.getElementById("value").style.color = "green"; 
	document.getElementById("blank").style.backgroundColor = "transparent"; 
}

function showMax() {
	var day = 0;
	var max = 0;
	
	for (var i = 0; i < days.length; i++) {
		if (parseInt(calories[i]) > max) {
			max = calories[i]
			day = i;
		}
	}
	
	document.getElementById("showMax").innerHTML = "Your maximum consumed calorie is " + max + " on " + getDay(day);
	
}

function getDay(day) {
	switch (day) {
		case 0:
			return "Monday";
			break;
		case 1:
			return "Tuesday";
			break;
		case 2:
			return "Wednesday";
			break;
		case 3:
			return "Thursday";
			break;
		case 4:
			return "Friday";
			break;
		case 5:
			return "Saturday";
			break;
		case 6:
			return "Sunday";
			break;
	}
	
	return "Unknown";
}