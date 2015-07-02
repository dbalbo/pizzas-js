describe('Pizza', function() {
	it('will begin with a plain cheese pizza with no other toppings', function() {
		var cheesePizza = new Pizza()
		expect(cheesePizza.toppings).to.eql([]);
	});

	it("will cost nothing until the user adds their own pizza with toppings", function() {
		var testPizza = new Pizza()
		expect(testPizza.cost).to.equal(0);
	});
});