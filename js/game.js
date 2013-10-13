function gameLoop() {
    update();
    draw();
}

function draw() {
    // draw all the pages here.
    frontpage.draw();

    stage.update();
}

var prevTime = 0;
var prevLeft = false, prevRight = false, prevUp = false, prevDown = false;
function update() {
    var totalTime = createjs.Ticker.getTime();
    var elapsedTime = totalTime - prevTime;
    prevTime = createjs.Ticker.getTime();
    keyboardSupport.tick();
    if (gamepadSupport.available) {
        gamepadSupport.tick();
    }

    // update all the pages here.
    frontpage.update(elapsedTime);
}
