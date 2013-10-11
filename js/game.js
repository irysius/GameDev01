var KEY_LEFT = 37, KEY_RIGHT = 39, KEY_UP = 38, KEY_DOWN = 40, KEY_A = 65, KEY_S = 83, KEY_D = 68, KEY_W = 87, KEY_SPACE = 32;

function gameLoop() {
    update();
    draw();
}

function draw() {
    stage.update();
}

var prevTime = 0;
var prevLeft = false, prevRight = false, prevUp = false, prevDown = false;
function update() {
    var totalTime = createjs.Ticker.getTime();
    var elapsedTime = totalTime - prevTime;
    prevTime = createjs.Ticker.getTime();

    updateGamepad(elapsedTime);

    if (pressedKeys[KEY_UP] || pressedKeys[KEY_W]) {
        moveUp(elapsedTime, 100, 0);
    }
    if (pressedKeys[KEY_DOWN] || pressedKeys[KEY_S]) {
        moveDown(elapsedTime, 100, 0);
    }
    if (pressedKeys[KEY_LEFT] || pressedKeys[KEY_A]) {
        moveLeft(elapsedTime, 100, 0);
    }
    if (pressedKeys[KEY_RIGHT] || pressedKeys[KEY_D]) {
        moveRight(elapsedTime, 100, 0);
        //currval += elapsedTime;
        //if (currval > threshold){
        //    moveRight(elapsedTime, 10000);
        //    currval = 0;
        //}
    }
    //else {
    //    currval = 0;
    //}
    if (pressedKeys[KEY_SPACE]) {

    }
}

function updateGamepad(elapsedTime) {
    if (gamepadSupport.available) {
        gamepadSupport.tick();

        var leftX = gamepadSupport.xboxControllerState.STICK_LEFT_X;
        var leftY = gamepadSupport.xboxControllerState.STICK_LEFT_Y;
        var rightX = gamepadSupport.xboxControllerState.STICK_RIGHT_X;
        var rightY = gamepadSupport.xboxControllerState.STICK_RIGHT_Y;

        // note to self, set axis threshold to 0.25
        if (leftX < -0.2) {
            moveLeft(elapsedTime, 200, 0);
        } else if (leftX > 0.2) {
            moveRight(elapsedTime, 200, 0);
        }
        if (leftY < -0.2) {
            moveUp(elapsedTime, 200, 0);
        } else if (leftY > 0.2) {
            moveDown(elapsedTime, 200, 0);
        }

        
        if (rightX < -0.2) {
            moveLeft(elapsedTime, 200, 1);
        } else if (rightX > 0.2) {
            moveRight(elapsedTime, 200, 1);
        }
        if (rightY < -0.2) {
            moveUp(elapsedTime, 200, 1);
        } else if (rightY > 0.2) {
            moveDown(elapsedTime, 200, 1);
        }
    }
}

function moveUp(increment, elapsed, ballId) {
    switch (ballId) {
        case 0:
            ball_blue.y -= increment * elapsed / 1000;
            break;
        case 1:
            ball_red.y -= increment * elapsed / 1000;
            break;
    }
}
function moveDown(increment, elapsed, ballId) {
    switch (ballId) {
        case 0:
            ball_blue.y += increment * elapsed / 1000;
            break;
        case 1:
            ball_red.y += increment * elapsed / 1000;
            break;
    }
}
function moveLeft(increment, elapsed, ballId) {
    switch (ballId) {
        case 0:
            ball_blue.x -= increment * elapsed / 1000;
            break;
        case 1:
            ball_red.x -= increment * elapsed / 1000;
            break;
    }
}
function moveRight(increment, elapsed, ballId) {
    switch (ballId) {
        case 0:
            ball_blue.x += increment * elapsed / 1000;
            break;
        case 1:
            ball_red.x += increment * elapsed / 1000;
            break;
    }
}