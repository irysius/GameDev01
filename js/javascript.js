var gamepadsAvailable = false;

$(function () {
    gamepadsAvailable = gamepadSupport.init();
    initializeGame();
});