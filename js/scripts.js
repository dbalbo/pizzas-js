function Pizza(size, toppings) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  return this.toppings;
}

Pizza.prototype.price = function() {
  var cost;
  if (this.size === "Texas") {
    cost = 50;
  } else if (this.size === "Large") {
    cost = 20;
  } else if (this.size === "Medium") {
    cost = 15;
  } else {
    cost = 10;
  }
  return cost + (this.toppings.length);
}

Pizza.prototype.checkOut = function() {
  var string = this.size + " plain cheese with:";

  if (this.toppings.length > 0) {
    for(var i = 0; i < this.toppings.length; i++) {
      string += " ";
      string += this.toppings[i];
    }
  }
  return string;
}

function addPizza() {
  $("#initial-order").append('<div class="new-pizza-form">' +
                            '<div class="form-group">' +
                              '<label for="pizza-size">Pick Your Size:</label>' +
                              '<select class="size" name="pizza-size" type="text">' +
                                '<option value="Small"> Small</option>' +
                                '<option value="Medium"> Medium</option>' +
                                '<option value="Large"> Large</option>' +
                                '<option value="Texas"> Texas</option>' +
                              '</select>' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<fieldset id="form-toppings">' +
                                '<label for="toppings">Add toppings*:</label><br><br>' +
                                '<input type="checkbox" name="toppings" value="Hamburger"> Hamburger<br><br>' +
                                '<input type="checkbox" name="toppings" value="Canadian Bacon"> Canadian Bacon<br><br>' +
                                '<input type="checkbox" name="toppings" value="Pepperoni"> Pepperoni<br><br>' +
                                '<input type="checkbox" name="toppings" value="Shrooms"> Shrooms<br><br>' +
                                '<input type="checkbox" name="toppings" value="Italian Super Spicy Sausage"> Italian Super Spicy Sausage<br><br>' +
                                '<input type="checkbox" name="toppings" value="Flerm"> Flerm<br><br>' +
                              '</fieldset>' +
                            '</div>' +
                          '</div>');
}

$(document).ready(function(){
  var pizzas = [];
  var finalCost = 0;

  $(".clickable").click(function() {
  	$("#cage-showing").toggle();
  	$("#cage-hidden").toggle();
  })

  $("#more-pizza").click(function() {
    addPizza();
  });

  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    $(".new-pizza-form").each(function() {
      var size = $(this).find("select.size").val();
      var pizza = new Pizza(size);
      $(this).find("fieldset#form-toppings :checked").each(function() {
        pizza.addTopping($(this).val());
      });

      pizzas.push(pizza);
      finalCost += pizza.price();
    });

    $("#first-order").hide();
    for(var i = 0; i < pizzas.length; i++) {
      pizza = pizzas[i];
      $("h3#pizzas").append(pizza.checkOut() + "<br>");
    }
    $("h4#cost").append("The Total For Your Order is: $" + finalCost);
    $("#final-page").show();
  });
});
