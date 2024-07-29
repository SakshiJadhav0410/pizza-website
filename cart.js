document.querySelector('#cart').addEventListener('click', () => {
  window.location.href = 'cart.html';
});
function addToCart(button) {
  // Get the item details
  const name = button.parentNode.parentNode.querySelector('h2').textContent;
  const price = button.parentNode.parentNode.querySelector('.price').textContent;

  // Add the item to the cart
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push({ name, price });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Redirect to cart.html
  window.location.href = 'cart.html';
}
let cartItems = [];

function addToCart(button) {
    // Get the menu item details
    const menuItem = button.parentNode.parentNode;
    const name = menuItem.querySelector('h2').textContent;
    const price = menuItem.querySelector('.price').textContent;

    // Add the item to the cart
    cartItems.push({ name, price });

    // Update the cart dropdown
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartList = cartDropdown.querySelector('#cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${name} - ${price}`;
    cartList.appendChild(cartItem);

    // Update the cart count
    const cartCount = cartDropdown.querySelector('#cart-count');
    cartCount.textContent = `(${cartItems.length})`;
}

// Add event listeners to the "Add to Cart" buttons
const addButtons = document.querySelectorAll('.btn');
addButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        addToCart(button);
    });
});
function addToCart(button) {
  // Get the item details
  const name = button.parentNode.querySelector('h2').textContent;
  const price = button.parentNode.querySelector('.price').textContent;

  // Add the item to the cart
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push({ name, price });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update the cart dropdown
  const cartDropdown = document.querySelector('.cart-dropdown');
  const cartList = cartDropdown.querySelector('#cart-items');
  const cartItem = document.createElement('li');
  cartItem.textContent = `${name} - ${price}`;
  cartList.appendChild(cartItem);
}