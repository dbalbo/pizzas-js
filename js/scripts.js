function Pizza(toppings, cost, size) {
	this.toppings = [];
	this.cost = 0;
	this.size = size;
}

Pizza.prototype.price = function() {
	var cost;
		if (this.size === "Small") {
		this.cost += 10;
	}	else if (this.size === "Medium") {
		this.cost += 15;
	} 	else if (this.size === "Large") {
		this.cost += 20;
	}	else if (this.size === "Texas") {
		this.cost += 50;
	}
	this.cost = (this.toppings.length)
	return this.cost;
	
}

Pizza.prototype.addTopping = function(type) {
	this.toppings.push(type)
	return this.toppings;
}


function Topping(cost) {
	this.cost = 1;
}