
const cartButton = document.getElementById('cart-button');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

let cart = [];

cartButton.onclick = () => cartSidebar.classList.add('open');
closeCart.onclick = () => cartSidebar.classList.remove('open');

document.querySelectorAll('.comprar-btn').forEach(button => {
    button.addEventListener('click', e => {
        const card = e.target.closest('.card');
        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);

        const item = cart.find(i => i.name === name);
        if (item) {
            item.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.qty} - R$ ${(item.price * item.qty).toFixed(2)}`;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}
