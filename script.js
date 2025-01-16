// JavaScript File
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Navigation
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Form Validation
    const contactForm = document.querySelector(".contact-section form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = contactForm.querySelector("input[placeholder='Your Name']");
        const email = contactForm.querySelector("input[placeholder='Your Email']");
        const message = contactForm.querySelector("textarea[placeholder='Your Message']");

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert("Semua field harus diisi!");
            return;
        }

        alert("Pesan berhasil dikirim!");
        contactForm.reset();
    });

    // Modal Handling (Optional if using CSS already)
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        const closeButton = modal.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
            const checkbox = modal.previousElementSibling;
            if (checkbox) checkbox.checked = false;
        });
    });

    // Optional: Add animation when section appears (if desired)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("hidden"); // Ensure hidden before animation
        observer.observe(section);
    });

    // Running Text (Marquee)
    const judul = document.querySelector(".judul");
    if (judul) {
        const containerWidth = judul.parentElement.offsetWidth;
        let position = containerWidth;

        // Function to move the text
        function moveText() {
            position -= 2; // Adjust speed
            judul.style.transform = `translateX(${position}px)`;

            // Reset position when text moves out of view
            if (position + judul.offsetWidth < 0) {
                position = containerWidth;
            }

            requestAnimationFrame(moveText);
        }

        // Start the animation
        judul.style.position = "absolute"; // Ensure position is absolute
        judul.style.whiteSpace = "nowrap"; // Prevent text wrapping
        moveText();
    }
});
