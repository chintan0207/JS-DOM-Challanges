const cartItems = document.getElementById("cart-items");
const emptyCart = document.getElementById("empty-cart");
const cartTotal = document.getElementById("cart-total");

let cart = [];
let totalPrice = 0;
function addToCart(productName, price) {
  const existingItem = cart.find((item) => item.name === productName);
  if (existingItem) {
    existingItem.quantity++;
    return updateCart();
  }
  let newItem = {
    name: productName,
    price,
    quantity: 1,
  };

  cart.push(newItem);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  totalPrice = 0;

  if (cart.length === 0) {
    emptyCart.style.display = "block";
    cartTotal.innerHTML = "Total: $0.00";
    return;
  }
  cart.forEach((cartItem, index) => {
    const cart = document.createElement("div");
    cart.className = "cart-item";

    const span = document.createElement("span");
    span.innerText = cartItem.name;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "quantity-controls"

    const incrementQuantity = document.createElement("button");
    incrementQuantity.innerText = "+";

    const cartQuantity = document.createElement("div");
    cartQuantity.innerText = cartItem.quantity;

    const decrementQuantity = document.createElement("button");
    decrementQuantity.innerText = "-";

    const individualCartTotalPrice = document.createElement("div");
    individualCartTotalPrice.innerText = `$${(
      cartItem.price * cartItem.quantity
    ).toFixed(2)}`;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
    });

    incrementQuantity.addEventListener("click", () => {
      cartItem.quantity++;
      updateCart();
    });

    decrementQuantity.addEventListener("click", () => {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        cart.splice(index, 1);
      }
      updateCart();
    });

    buttonsContainer.appendChild(incrementQuantity);
    buttonsContainer.appendChild(cartQuantity);
    buttonsContainer.appendChild(decrementQuantity);

    buttonsContainer.appendChild(individualCartTotalPrice);
    buttonsContainer.appendChild(removeBtn);

    cart.appendChild(span);
    cart.appendChild(buttonsContainer);
    cartItems.appendChild(cart);
    totalPrice += cartItem.price * cartItem.quantity;
  });

  cartTotal.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

