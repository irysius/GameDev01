var canvas, stage, preload, cornflowerBlue;
var pressedKeys={};
var width = 1024;
var height = 768;


var ballBitmap;

function initializeGame() {
    console.log('initializing game.');
    canvas = document.getElementById('main-canvas');
    canvas.width = width;
    canvas.height = height;
    stage = new createjs.Stage(canvas);
    preload = new createjs.LoadQueue(true);
    preload.installPlugin(createjs.Sound);
    preload.addEventListener('complete', prepareAssets);
    this.document.onkeydown = handleKeyDown;
    this.document.onkeyup = handleKeyUp;

    var manifest = [
        { id: 'ballImage', src: 'img/ball.png' }
    ];

    preload.loadManifest(manifest);
}

function prepareAssets() {
    console.log('preparing assets.')
    cornflowerBlue = new createjs.Shape();
    cornflowerBlue.graphics.beginFill('#93CCEA').drawRect(0, 0, width, height);
    stage.addChild(cornflowerBlue);

    prepareBitmaps();
    prepareAnimations();

    stage.addChild(ballBitmap);

    run();
}

function run(){
    createjs.Ticker.setInterval(window.requestAnimationFrame);
    createjs.Ticker.addEventListener('tick', gameLoop);
}

function prepareBitmaps() {
    var ballImage = preload.getResult('ballImage');
    ballBitmap = new createjs.Bitmap(ballImage);
}
function prepareAnimations() { 
}

function handleKeyDown(e){
     e = e || window.event;
     pressedKeys[e.keyCode] = true;
}

function handleKeyUp(e){
     e = e || window.event;
     delete pressedKeys[e.keyCode];
}