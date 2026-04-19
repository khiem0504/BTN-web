// --- QUẢN LÝ GIỎ HÀNG (Sử dụng LocalStorage) ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm thêm sản phẩm vào giỏ
function addToCart(name, price, qty = 1) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, qty });
    }

    // Lưu vào bộ nhớ trình duyệt
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Cập nhật số hiển thị trên icon giỏ hàng
    updateCartBadge();
    
    // Hiển thị thông báo nhẹ nhàng (thay vì alert thô sơ)
    console.log(`Đã thêm ${name} vào giỏ hàng`);
    alert(`Đã thêm ${name} vào giỏ hàng thành công!`);
}

// Hàm cập nhật số lượng hiển thị trên Badge giỏ hàng
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = totalQty;
        badge.style.transform = "scale(1.2)";
        setTimeout(() => {
            badge.style.transform = "scale(1)";
        }, 200);
    }
}

// --- MENU MOBILE ---
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1fr solid #eee';
    }
}

// Khởi tạo các tính năng khi trang web load xong
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});