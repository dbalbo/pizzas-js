describe('Pizza', function() {
	it(has different sizes, function() {
		var testPizza = new Pizza("Large");
		expect(testPizza.size).to.eql('Large');
	});


	it("will cost nothing until the user adds their own pizza with toppings", function() {
		var testPizza = new Pizza()
		expect(testPizza.cost).to.equal(0);
	});


	// it("lets a user choose a size of pizza", function() {
	// 	var testPizza = new Pizza('Large')
	// 	expect(testPizza.size).to.equal('Large');
	// });


	// it('will let user add a topping', function() {
	// 	var testPizza = new Pizza('large')
	// 	pizza.addTopping("pepperoni")
	// 	expect(testPizza.toppings).to.eql(['pepperoni']);
	// });


	// it('has different costs for different sizes', function() {
	// 	var testPizza = new Pizza("large")
	// 	expect(testPizza.cost()).to.equal(20)
	// });


	// it('returns the cost of the pizza if toppings are added at a dollar per topping', function() {
	// 	var testPizza = new Pizza('large')
	// 	pizza.addTopping('pepperoni')
	// 	expect(testPizza.cost()).to.equal(21);
	// });
});
