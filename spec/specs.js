describe('Pizza', function() {
	it('comes in sizes', function() {
		var testPizza = new Pizza("Large");
		expect(testPizza.size).to.eql("Large");
	});


	it('will let user add a topping', function() {
		var testPizza = new Pizza();
		testPizza.addTopping("Italian Sausage");
		expect(testPizza.toppings).to.eql(['Italian Sausage']);
	});



	it('has different prices for different sizes', function() {
		var testPizza = new Pizza("Texas");
		expect(testPizza.price()).to.equal(50);
	});


	it('returns the cost of the pizza if toppings are added at a dollar per topping', function() {
		var testPizza = new Pizza('Large');
		testPizza.addTopping('Pepperoni');
		expect(testPizza.price()).to.equal(21);
	});
});
