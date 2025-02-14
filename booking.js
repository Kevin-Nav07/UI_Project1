document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("book-btn");
    let selectedTrainer = "";

    // Handle trainer selection
    document.querySelectorAll(".trainer-btn").forEach(button => {
        button.addEventListener("click", function () {
            selectedTrainer = this.dataset.trainer;
            document.querySelectorAll(".trainer-btn").forEach(btn => btn.style.background = "#4A90E2");
            this.style.background = "#357ABD";
        });
    });

    // Handle booking submission
    bookingForm.addEventListener("click", function () {
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!date || !time || !selectedTrainer) {
            alert("Please select a date, time, and trainer.");
            return;
        }

        // Save booking details in localStorage
        const bookingDetails = { date, time, trainer: selectedTrainer };
        localStorage.setItem("lastBooking", JSON.stringify(bookingDetails));

        // Redirect to the confirmation page
        window.location.href = "booking-confirmed.html";
    });
});
