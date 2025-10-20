document.addEventListener('DOMContentLoaded', function() {
    // 1. Footer mein current year daalne ke liye
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Isse URL hash (#) change nahin hoga agar woh sirf smooth scroll ke liye hai
            if (this.getAttribute('href') !== '#') {
                 e.preventDefault();
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Thoda offset (jagah) chhodne ke liye agar sticky header hai
                const headerOffset = 70; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});