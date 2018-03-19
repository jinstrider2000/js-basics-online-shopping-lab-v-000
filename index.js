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
 cart.unshift({itemName: item, itemPrice: Math.floor(Math.random()*100)})
 return `${cart[0].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  message = "Your shopping cart is empty"
  for (var i = 0; i < cart.length; i++)
  {
    if (i == 0)
    {
      message = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    else if (i < cart.length-1 && length > 2)
    {
      message = `${message}, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    else
    {
      message = `${message}, and ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
  }
  message = `${message}.`
  return message
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
