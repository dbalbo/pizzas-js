describe('Pizza', function() {
	it('will begin with a plain cheese pizza with no other toppings', function() {
		var cheesePizza = new Pizza()
		expect(cheesePizza.toppings).to.eql([]);
	});

	it("will cost nothing until the user adds their own pizza with toppings", function() {
		var testPizza = new Pizza()
		expect(testPizza.cost).to.equal(0);
	});

	it("lets a user choose a size such as large, medium, or small", function() {
		var testPizza = new Pizza('large')
		expect(testPizza.size).to.eql('large');
	});

	it('will let user add a topping', function() {
		var cheesePizza = new Pizza()
		cheesePizza.addTopping("pepperoni")
		expect(cheesePizza.toppings).to.eql(['pepperoni']);
	});
});
