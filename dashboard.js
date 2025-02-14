document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "login.html"; // Redirect to login if not logged in
        return;
    }

    const userData = JSON.parse(localStorage.getItem(loggedInUser));
    document.getElementById("username-display").textContent = userData.username;
    document.getElementById("body-info").textContent = `Weight: ${userData.weight} kg, Height: ${userData.height} cm`;

    const appointmentsList = document.getElementById("appointments-list");

    function renderAppointments() {
        appointmentsList.innerHTML = "";
        userData.appointments.forEach((appt, index) => {
            const li = document.createElement("li");
            li.textContent = `📅 ${appt.date} at ${appt.time}`;
            appointmentsList.appendChild(li);
        });
    }

    renderAppointments();

    // Logout Function
    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });
});
