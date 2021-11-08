//Variable Declaration
var name;
var state;

function initialInput() 
{
	
	//Initial Prompts
    setName(prompt("Enter your name: "));
    setState(prompt("How are you doing?"));

	//Initialization
    writeTime();
    writeWelcome();
}

function setName(newName)
{ 
    this.name = newName;
}

function setState(newState) 
{
    this.state = newState;
}

function getDateString() 
{
    var date = new Date();
	var suffix;
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
	return month[date.getMonth()] + " " + date.getDate() + (date.getDate() == 1 ? "st" : date.getDate() == 2 ? "nd" : date.getDate() == 3 ? "rd" : "th");
}

function getTimeString() 
{
    var date = new Date();

    return (date.getHours() % 12) + ":" + date.getMinutes() + " " + (date.getHours() <= 12 ? "AM" : "PM");
}

function writeTime() 
{
	document.getElementById("time").innerHTML = "Today is " + getDateString() + ", and the time is: " + getTimeString();
}

function writeWelcome() 
{
	document.getElementById("welcome").innerHTML = "Marker Inc. welcomes you, " + name + "! " + "We're glad you are doing " + state + "!"; 
}

function changeNameToMark() {
	this.name = "Mark";
	
	document.getElementById("welcome").innerHTML = "I did not hit her! I DID NOT! Oh, hi " + name + "!";
}

function generateMarker() 
{
	document.getElementById("marker").style.display = "block";
}

function randomMarks()
{
	var amount = Math.floor(Math.random() * 6) + 1;
	var output = "";
	
	for (var i = 0; i < amount; i++) {
		output += "Mark ";
	}
	
	document.getElementById("randommarks").innerHTML = output;
}

function thinkMarkThink() 
{
	window.open("https://youtu.be/tYNNRwyYK4s?t=208", "_blank");
}

function convenientExit()
{
	var int1 = prompt("Enter a number: ");
	var int2 = prompt("Enter another number: ");
	
	window.alert("Your sum is: " + (parseInt(int1) + parseInt(int2)));
}