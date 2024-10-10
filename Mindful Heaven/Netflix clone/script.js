function togglePopup(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("active");
    
    var overlay = popup.querySelector('.overlay');
    var closeBtn = popup.querySelector('.close-btn');

    // Add event listeners to overlay and close button
    overlay.addEventListener('click', function() {
        popup.classList.remove("active");
    });

    closeBtn.addEventListener('click', function() {
        popup.classList.remove("active");
    });
}