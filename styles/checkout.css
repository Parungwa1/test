let cart = [];

function addToCart(button) {
    const item = button.parentElement;
    const name = item.getAttribute('data-name');
    const price = item.getAttribute('data-price');
    const image = item.getAttribute('data-image');

    cart.push({ name, price, image });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    const paymentModal = document.getElementById('payment-modal');
    const paymentDetails = document.getElementById('payment-details');
    paymentDetails.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${item.image}" alt="${item.name}" width="50"> ${item.name} - $${item.price}`;
        paymentDetails.appendChild(div);
    });

    paymentModal.style.display = 'block';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function payNow() {
    alert('Payment processed through Visa, MasterCard, or PayPal.');
    cart = [];
    updateCart();
    closeModal();
}
