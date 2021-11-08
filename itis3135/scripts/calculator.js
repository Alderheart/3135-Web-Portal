//Variable Declaration
var inputOne;
var inputTwo;
var operation;
var state = 1;

function awake() 
{
	inputOne = "";
	inputTwo = "";
	operation = "";

}



function calcInput(input) 
{
	switch (input)
	{
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 0:
			if (state == 1) 
			{
				inputOne = inputOne + input;
			}
			else if (state == 2)
			{
				inputTwo = inputTwo + input;
			}
			break;
		case "+":
		case "-":
		case "*":
		case "/":
			if (operation == "") 
			{
				operation = input;
			}

			if (state == 1) 
			{
				state = 2;
			}
			else if (state == 2) 
			{
				if (inputTwo != "") 
				{
					processOutput();
					
				}
				else {
					if (operation != "")
					{
						operation = input;
						state = 2;
					}
				}
			}
			
			break;
		case "=":
			if (inputTwo != "") 
			{
				processOutput()
			}
			break;
		case "CE":
			state = 1;
			inputOne = "";
			inputTwo = "";
			operation = "";
			break;
			
	}
	
	updateCalc();
	
	return false;
}

function updateCalc() 
{
	if (state == 1) 
	{
		document.getElementById("output").innerHTML = inputOne; 
	}
	else if (state == 2)
	{
		document.getElementById("output").innerHTML = inputOne + " " + operation + " " + inputTwo;
	}
	
	console.log(inputOne + " " + operation + " " + inputTwo);
	console.log("debug: " + state);
}

function processOutput() 
{
	var post;
	
	switch(this.operation) 
	{
		case "+":
			post = parseInt(inputOne) + parseInt(inputTwo);
			break;
		case "-":
			post = parseInt(inputOne) - parseInt(inputTwo);
			break;
		case "*":
			post = parseInt(inputOne) * parseInt(inputTwo);
			break;
		case "/":
			post = parseInt(inputOne) / parseInt(inputTwo);
			break;
		default:
		
			break;
	}
	
	inputOne = post;
	inputTwo = "";
	operation = "";
	state = 1;
	
	return post;
}




