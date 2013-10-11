var canvas, stage, preload, background;
var pressedKeys={};



var ball_blue;
var ball_red;

function initializeGame() {
    console.log('initializing game.');
    canvas = document.getElementById('main-canvas');
    canvas.width = standardWidth;
    canvas.height = standardHeight;
    stage = new createjs.Stage(canvas);
    preload = new createjs.LoadQueue(true);
    preload.installPlugin(createjs.Sound);
    preload.addEventListener('complete', prepareAssets);
    this.document.onkeydown = handleKeyDown;
    this.document.onkeyup = handleKeyUp;
    $(window).resize(function () {
        redrawAssets();
    });

    var manifest = [
        { id: 'ballImage', src: 'img/ball.png' }
    ];

    preload.loadManifest(manifest);
}

function prepareAssets() {
    console.log('preparing assets.')
    background = new createjs.Shape();
    background.graphics.beginFill('#93CCEA').drawRect(0, 0, standardWidth, standardHeight);
    stage.addChild(background);

    prepareVectors();
    prepareBitmaps();
    prepareAnimations();

    stage.addChild(ball_blue);
    stage.addChild(ball_red);

    run();
}

function run(){
    createjs.Ticker.setInterval(window.requestAnimationFrame);
    createjs.Ticker.addEventListener('tick', gameLoop);
}

function prepareBitmaps() {
    //var ballImage = preload.getResult('ballImage');
    //ballBitmap = new createjs.Bitmap(ballImage);
}
function prepareVectors() {
    ball_blue = new createjs.Shape();
    ball_blue.graphics.beginFill('#0000FF').drawCircle(0, 0, 10);
    ball_red = new createjs.Shape();
    ball_red.graphics.beginFill('#FF0000').drawCircle(0, 0, 10);
}
function prepareAnimations() { 
}

// picking 4: 3 ratios
var screenSizes = {
    '640x480' : {  width: 640, height: 480, scale: 0.625 },
    '800x600' : { width: 800, height: 600, scale: 0.78125 },
    '1024x768' : { width: 1024, height: 768, scale: 1 },
    '1280x960' : { width: 1280, height: 960, scale: 1.25 }
};
var screenSize = '1024x768';
var standardWidth = 1024;
var standardHeight = 768;

function redrawAssets() {
    console.log('redrawing');
    var screenWidth = $('body').innerWidth();
    var screenHeight = $('body').innerHeight();

    var targetScreenSize = '1024x768';
    if (screenWidth < 800) {
        targetScreenSize = '640x480';
    } else if (screenWidth < 1024){
        targetScreenSize = '800x600';
    } else if (screenWidth < 1280){
        targetScreenSize = '1024x768';
    } else {
        targetScreenSize = '1280x960';
    }

    if (screenSize == targetScreenSize)
        return;
        
    screenSize = targetScreenSize;
    var ss = screenSizes[screenSize];
    canvas.width = ss.width;
    canvas.height = ss.height;

    for (childIdx in stage.children) {
        child = stage.getChildAt(childIdx);
        child.scaleX = ss.scale;
        child.scaleY = ss.scale;
    }
}

function handleKeyDown(e){
     e = e || window.event;
     pressedKeys[e.keyCode] = true;
}

function handleKeyUp(e){
     e = e || window.event;
     delete pressedKeys[e.keyCode];
}