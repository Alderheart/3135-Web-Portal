//Variable Declaration
const people = [];
const salaries = [];


function displayResults()
{
	var salaryHigh = 0;
	var salaryTotal = 0;
	
	for (var i = 0; i < salaries.length; i++)
	{
		salaryTotal = salaryTotal + salaries[i];
		
		if (salaryHigh < salaries[i])
		{
			salaryHigh = salaries[i];
		}
	}
	
	//Additional Math
	var salaryAverage = salaryTotal / salaries.length;
}

function displaySalary()
{
	
}

function addSalary()
{
	
}

function validate()
{
	
}