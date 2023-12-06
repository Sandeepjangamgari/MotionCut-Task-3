let cartCount = 0;

function addToCart() {
    cartCount++;
    updateCartCount();
}

function viewCart() {
    alert(`Cart Count: ${cartCount}`);
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cartCount;
}
