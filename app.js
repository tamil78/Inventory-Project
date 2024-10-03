document.getElementById("signInButton").addEventListener("click", function() {
    window.location.href = "signin.html"; // Redirect to sign-in page
});

// Function to handle Shop Now button
function shopNow() {
    alert("Redirecting to shop...");
    window.location.href = 'shop-page.html'; // Replace with actual shop page link
}

// Admin Login
function adminLogin() {
    const email = document.getElementById("adminEmail").value;
    const password = document.getElementById("adminPassword").value;

    if (email === "tamilarasithangaraj01@gmail.com" && password === "Tamil@1234") {
        alert("Admin logged in successfully.");
        // Redirect to admin dashboard or perform admin operations
    } else {
        alert("Invalid admin credentials.");
    }
}