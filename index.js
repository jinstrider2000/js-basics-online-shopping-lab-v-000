var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var tempItem = {[item]: Math.floor(Math.random()*100)};
 cart.unshift(Object.assign(tempItem, {itemName: item, itemPrice: tempItem[item]}));
 var message = `${cart[0].itemName} has been added to your cart.`;
 console.log(message);
 return getCart();
}

function viewCart() {
  // write your code here
  var message = "Your shopping cart is empty";
  for (var i = 0; i < cart.length; i++)
  {
    if (i == 0)
    {
      message = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    else if (i < cart.length-1 && length > 2)
    {
      message = `${message}, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    else
    {
      message = `${message}, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
  }
  message = `${message}.`;
  return message;
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i,1);
      found = true;
      break;
    }
  }
  return found ? cart : "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  var message = "";
  if (cardNumber == undefined) {
    message = "Sorry, we don't have a credit card on file for you.";
  } else {
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
  return message;
}
