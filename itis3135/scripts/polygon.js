//Variable Declaration
var sides;
var validated = false;

function awake() 
{
	while (!validated) 
	{
		setSides(prompt("Massive Fox Inc. would like you to input the number of sides your polygon has here (1-10): "));
		
		if (validateEntry(sides))
		{
			validated = true;
		}
		else {
			window.alert("That is not a valid input. Please try again.");
		}
	}
	
	window.alert("Massive Fox Inc. has determined your polygon to be: " + getShape(sides));
}

//Returns shape depending on side countu
function getShape(sideCount) 
{
	switch(parseInt(sideCount)) 
	{
		case 1:
			return "monogon";
			break;
		case 2:
			return "digon";
			break;
		case 3:
			return "triangle";
			break;	
		case 4:
			return "square";
			break;
		case 5:
			return "pentagon";
			break;
		case 6:
			return "hexagon";
			break;
		case 7:
			return "septagon";
			break;
		case 8:
			return "octagon";
			break;
		case 9:
			return "nonagon";
			break;
		case 10:
			return "decagon";
			break;
		default:
			return "unknown";
			break;
	}
}

//Validates human input
function validateEntry(sideCount) {
	if (sideCount > 0 && sideCount <= 10) {
		return true;
	}
	else {
		return false;
	}
}

function refresh() {
		location.reload(false);
}

function setSides(newSides) 
{
	this.sides = newSides;
}