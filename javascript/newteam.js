document.addEventListener('DOMContentLoaded', function() {
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
