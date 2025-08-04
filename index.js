// script.js

// You can add interactivity here if needed
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value;
    alert('Searching for: ' + searchTerm);
});
