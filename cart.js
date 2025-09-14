document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || {};
  function saveCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      const name = e.target.dataset.name;
      const price = parseFloat(e.target.dataset.price);
      if (cart[name]) {
        cart[name].quantity += 1;
      } else {
        cart[name] = { price, quantity: 1 };
      }
      saveCart();
      alert(`${name} has been added to the cart.`);
    })
  );
});
