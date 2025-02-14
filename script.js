document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");

    overlay.addEventListener("mouseover", function () {
        overlay.style.background = "rgba(255, 255, 255, 0.6)";
    });

    overlay.addEventListener("mouseout", function () {
        overlay.style.background = "rgba(255, 255, 255, 0.3)";
    });
});
