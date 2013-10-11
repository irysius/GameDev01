var KEY_LEFT = 37, KEY_RIGHT = 39, KEY_UP = 38, KEY_DOWN = 40, KEY_A = 65, KEY_S = 83, KEY_D = 68, KEY_W = 87, KEY_SPACE = 32;

function gameLoop(){
    update();
    draw();
}

function draw(){
    stage.update();
}

var prevTime = 0;
var prevLeft = false, prevRight = false, prevUp = false, prevDown = false;
function update(){
    var totalTime = createjs.Ticker.getTime();
    var elapsedTime = totalTime - prevTime;
    prevTime = createjs.Ticker.getTime();

    updateGamepad(elapsedTime);
    
    if (pressedKeys[KEY_UP] || pressedKeys[KEY_W]){
        moveUp(elapsedTime, 100);
    }
    if (pressedKeys[KEY_DOWN] || pressedKeys[KEY_S]){
        moveDown(elapsedTime, 100);
    }
    if (pressedKeys[KEY_LEFT] || pressedKeys[KEY_A]){
        moveLeft(elapsedTime, 100);
    }
    if (pressedKeys[KEY_RIGHT] || pressedKeys[KEY_D]){
        moveRight(elapsedTime, 100);
        //currval += elapsedTime;
        //if (currval > threshold){
        //    moveRight(elapsedTime, 10000);
        //    currval = 0;
        //}
    } 
    //else {
    //    currval = 0;
    //}
    if (pressedKeys[KEY_SPACE]){
        
    }
}

function updateGamepad(elapsedTime) {
    if (gamepadSupport.available) {
        gamepadSupport.tick();

        // note to self, set axis threshold to 0.25
        if (gamepadSupport.xboxControllerState.STICK_LEFT_X < -0.5){
            moveLeft(elapsedTime, 100);
        } else if (gamepadSupport.xboxControllerState.STICK_LEFT_X > 0.5) {
            moveRight(elapsedTime, 100);
        }
        if (gamepadSupport.xboxControllerState.STICK_LEFT_Y < -0.5){
            moveUp(elapsedTime, 100);
        } else if (gamepadSupport.xboxControllerState.STICK_LEFT_Y > 0.5) {
            moveDown(elapsedTime, 100);
        }
    }
}

function moveUp(elapsed, increment){
    ballBitmap.y -= increment * elapsed / 1000;
}
function moveDown(increment, elapsed){
    ballBitmap.y += increment * elapsed / 1000;
}
function moveLeft(increment, elapsed){
    ballBitmap.x -= increment * elapsed / 1000;
}
function moveRight(increment, elapsed){
    ballBitmap.x += increment * elapsed / 1000;
}