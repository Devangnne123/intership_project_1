// Select the hamburger menu and nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener for the hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle a class on the hamburger menu for animations
    hamburger.classList.toggle('open');
});

// Close the nav links when clicking outside
document.addEventListener('click', (e) => {
    // Check if the click is outside the nav menu or hamburger
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    }
});
document.getElementById('openFileLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.open('../htnl.html', '_self'); // Opens newfile.html in a new tab
});
