// Hiệu ứng Reveal khi cuộn trang (Scroll Reveal)
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; // Khoảng cách để kích hoạt hiệu ứng

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('appear');
        }
    });
};

// Lắng nghe sự kiện cuộn chuột
window.addEventListener('scroll', revealOnScroll);

// Xử lý Form đăng ký Newsletter ở trang chủ
const newsletterForm = document.querySelector('.newsletter-box form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Cảm ơn bạn! Mã giảm giá 10% đã được gửi tới: ${email}`);
        newsletterForm.reset();
    });
}