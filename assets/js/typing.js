/* ==========================================================
   typing.js
   Sequential Role Fade Animation
   Shaik Sadiq Portfolio
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".role-track");

    if (!track) {
        console.warn("Role track not found.");
        return;
    }

    const items = Array.from(track.querySelectorAll(".role-item"));

    if (items.length === 0) {
        console.warn("No role items found.");
        return;
    }

    let currentIndex = 0;
    let autoSlide;

    function showRole(index) {
        items.forEach((item, itemIndex) => {
            item.classList.toggle("active", itemIndex === index);
        });
    }

    function nextRole() {
        currentIndex = (currentIndex + 1) % items.length;
        showRole(currentIndex);
    }

    function startSlider() {
        stopSlider();
        autoSlide = setInterval(nextRole, 2200);
    }

    function stopSlider() {
        if (autoSlide) {
            clearInterval(autoSlide);
        }
    }

    track.addEventListener("mouseenter", stopSlider);
    track.addEventListener("mouseleave", startSlider);

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopSlider();
        } else {
            startSlider();
        }
    });

    showRole(0);
    startSlider();

    console.log(
        "%cRole fade animation loaded ✓",
        "color:#2563EB;font-size:14px;font-weight:bold;"
    );

});