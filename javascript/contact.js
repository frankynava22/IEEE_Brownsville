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
});
