document.addEventListener("DOMContentLoaded", function () {
    const bookingData = JSON.parse(localStorage.getItem("lastBooking"));

    if (!bookingData) {
        alert("No recent booking found!");
        window.location.href = "booking.html";
        return;
    }

    document.getElementById("trainer-name").textContent = bookingData.trainer;
    document.getElementById("session-date").textContent = bookingData.date;
    document.getElementById("session-time").textContent = bookingData.time;
});
