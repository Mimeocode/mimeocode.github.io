function openPopup() {
    var pageContent = document.querySelector('.page-content');
    var popup = document.getElementById('popup');
    var popup_overlay = document.getElementById("popup-overlay");


    fadeOut(pageContent, 1000)
    popup.style.display = "block";
    popup_overlay.style.display = "block";
}
function closePopup() {
    var pageContent = document.querySelector('.page-content');
    var popup = document.getElementById('popup');
    var popup_overlay = document.getElementById("popup-overlay");

    popup.style.display = "none";
    popup_overlay.style.display = "none";
    pageContent.style.opacity = '1';
}

function fadeOut(element, duration) {
    let opacity = 1;
    const interval = 10;
    const perIntervalChange = 1 / (duration / interval);

    const fadeOutTimer = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(fadeOutTimer);
            element.style.pointerEvents = 'none';
        }
        element.style.opacity = opacity;
        opacity -= perIntervalChange;
    }, interval);
}