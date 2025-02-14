document.addEventListener("DOMContentLoaded", () => {

    // Auto Redirect if Logged In
    function checkLoginStatus() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            window.location.href = "dashboard.html"; // Redirect to client dashboard
        }
    }

    checkLoginStatus();

    // Signup Function
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;
            const weight = document.getElementById("signup-weight").value;
            const height = document.getElementById("signup-height").value;

            if (localStorage.getItem(username)) {
                alert("Username already exists! Try a different one.");
                return;
            }

            const userData = { username, password, weight, height, appointments: [] };
            localStorage.setItem(username, JSON.stringify(userData));

            alert("Signup successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    // Login Function
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            const storedUser = localStorage.getItem(username);
            if (!storedUser) {
                alert("User does not exist!");
                return;
            }

            const userData = JSON.parse(storedUser);
            if (userData.password !== password) {
                alert("Incorrect password!");
                return;
            }

            localStorage.setItem("loggedInUser", username); // Keep user logged in
            window.location.href = "dashboard.html"; // Redirect to dashboard
        });
    }

});
