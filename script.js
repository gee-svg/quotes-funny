document.addEventListener('DOMContentLoaded', function() {
    const clickMe = document.getElementById('clickMe');
    const helloYou = document.getElementById('helloYou');

    document.body.addEventListener('click', function() {
        // Hide "Click Me"
        clickMe.style.opacity = '0';
        clickMe.style.transform = 'scale(0.5)';

        // Show "Hello You" with animation
        helloYou.textContent = "SKINIM BAU";
        helloYou.classList.add('show-hello');

        // Update social sharing info
        document.querySelector('meta[property="og:title"]').content = "Hello You!";
        document.querySelector('meta[property="og:description"]').content = "You've been greeted!";

        // Remove click handler after first click
        document.body.removeEventListener('click', arguments.callee);
    });

    // Show message immediately if shared
    if(window.location.hash === '#shared') {
        clickMe.style.display = 'none';
        helloYou.textContent = "HELLO YOU";
        helloYou.classList.add('show-hello');
    }
});