const order = [];
var total = 0;

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	// add onclick event handler for each image
	// for click event add item to order and update total
	
	// Cappuccino
	document.getElementById("cappuccino").onclick = function() {
		order.push("<b>$3.45</b> - Cappuccino - <i>'Delicious Cappuccino!'</i>");
		total = parseFloat(total) + 3.45;
		update();
	}
	
	// Espresso
	document.getElementById("espresso").onclick = function() {
		order.push("<b>$1.95</b> - Espresso - <i>'Delicious espresso. Wanna try it?'</i>");
		total = parseFloat(total) + 1.95;
		update();
	}
	
	// display order and total
	
	update();
	
}; // end onload

// update elements

function update() {
	document.getElementById("order").innerHTML = order.join("<br>");
	document.getElementById("total").innerHTML = "<b>Total: <br>$" + parseFloat(total).toFixed(2) + "</b>";
}