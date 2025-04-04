document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling (with basic validation)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields.');
                return; // Stop form submission
            }

            // Basic email validation (you can use a more robust regex if needed)
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return; // Stop form submission
            }

            // In a real application, you would send this data to a server
            console.log('Form submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Optionally clear the form
            contactForm.reset();
            alert('Your message has been sent!');
        });
    }

    // Function to validate email (basic check)
    function isValidEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    // Scroll to Top Button Functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 200) {
                document.body.classList.add("show-scroll-btn");
            } else {
                document.body.classList.remove("show-scroll-btn");
            }
        });

        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
