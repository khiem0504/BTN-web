function renderCart() {
    const cartTable = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    cartTable.innerHTML = ''; // Xóa trắng để render lại

    if (cart.length === 0) {
        cartTable.innerHTML = '<tr><td colspan="3" style="text-align:center; padding: 20px;">Giỏ hàng trống</td></tr>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartTable.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price.toLocaleString()}đ</td>
                    <td><button onclick="removeProduct(${index})" style="color:red; cursor:pointer; background:none; border:none;">Xóa</button></td>
                </tr>
            `;
        });
    }

    totalPriceElement.innerText = total.toLocaleString() + 'đ';
}

function removeProduct(index) {
    cart.splice(index, 1); // Xóa 1 phần tử tại vị trí index
    localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật LocalStorage
    renderCart(); // Vẽ lại bảng
    updateCartBadge(); // Cập nhật số trên menu
}

// Chạy hàm render khi vào trang giỏ hàng
document.addEventListener('DOMContentLoaded', renderCart);