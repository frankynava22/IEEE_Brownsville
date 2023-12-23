document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add your form submission logic here, like sending data to a server

        // For now, let's simulate a successful submission
        alert("Thank you! Your message has been sent.");

        // Clear the form fields
        contactForm.reset();
    });

    var toggler = document.getElementById('toggler');
    toggler.addEventListener('change', function() {
        var menu = document.querySelector('.menu');
        if (this.checked) {
            document.body.style.overflow = 'hidden';
            menu.style.visibility = 'visible';
            menu.style.opacity = 1;
        } else {
            document.body.style.overflow = 'auto';
            menu.style.visibility = 'hidden';
            menu.style.opacity = 0;
        }
    });
});
