describe('Pizza', function() {
	it('will begin with a plain cheese pizza with no other toppings', function() {
		var cheesePizza = new Pizza()
		expect(cheesePizza.toppings).to.eql([]);
	});
});