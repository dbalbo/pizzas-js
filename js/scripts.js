function Pizza(toppings, cost, size) {
	this.toppings = []
	this.cost = 0
	this.size = size
}

Pizza.prototype.cost = function() {
		if (this.size === "Small") {
		cost = 10;
	}	else if (this.size === "Medium") {
		cost = 15;
	} 	else if (this.size === "Large") {
		cost = 20;
	}	else if (this.size === "Texas") {
		cost = 50;
	}
	return cost + (this.toppings.length);
	
}

Pizza.prototype.addTopping = function(type) {
	this.toppings.push(type)
	return this.toppings;
}