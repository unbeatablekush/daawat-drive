let cart = JSON.parse(localStorage.getItem("daawatCart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("daawatCart", JSON.stringify(cart));
    alert(name + " added to your order");
}
