// Handle search functionality
document.querySelector(".search-bar button").addEventListener("click", function() {
    const searchTerm = document.querySelector(".search-bar input").value;
    alert(`Searching for: ${searchTerm}`);
});

// Function to handle Shop Now button
function shopNow() {
    alert("Redirecting to shop...");
    window.location.href = 'shop-page.html'; // Replace with actual shop page link
}

// Sign In redirection functionality
document.getElementById('signIn').addEventListener('click', function() {
    window.location.href = 'signin-page.html'; // Redirect to sign-in page
});

// Logout functionality (can add Firebase sign-out logic here)
document.getElementById('logout').addEventListener('click', function() {
    alert('You have been logged out.');
    // Implement Firebase sign-out functionality if required
});
