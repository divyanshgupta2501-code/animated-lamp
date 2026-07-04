// ===============================
// LAMP LOGIN TOGGLE
// ===============================

const lamp = document.getElementById("lamp");

// Toggle ON/OFF on click
lamp.addEventListener("click", () => {
    document.body.classList.toggle("on");
});