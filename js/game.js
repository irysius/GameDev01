var game = {
    stage: null,
    canvas: null,
    preload: null,
    background: null,
    screenSize: { width: 1024, height: 768, scale: 1 },
    baseScreenSize: { width: 1024, height: 768, scale: 1 },
    pages: [],
    init: function () {
        game.canvas = document.getElementById('main-canvas');
        game.canvas.width = 1024;
        game.canvas.height = 768;
        game.stage = new createjs.Stage(game.canvas);
        game.preload = new createjs.LoadQueue(true);
        game.preload.installPlugin(createjs.Sound);
        game.preload.addEventListener('complete', game.prepareAssets);

        game.setMouseSupport(true);
        game.setKeyboardSupport(true);
        game.setGamePadSupport(true);

        $(window).resize(function () {
            game.resizing();
        });

        for (page in game.pages) {
            if (game.pages[page].manifest.length > 0) {
                game.preload.loadManifest(game.pages[page].manifest, false);
            }
        }

        game.preload.load();
    },
    setGamePadSupport: function (val) {
        if (val) gamepadSupport.init();
        gamepadSupport.enabled = val;
    },
    setKeyboardSupport: function (val) {
        if (val) {
            document.onkeydown = keyboardSupport.handleKeyDown;
            document.onkeyup = keyboardSupport.handleKeyUp;
        } else {
            document.onkeydown = null;
            document.onkeyup = null;
        }
    },
    setMouseSupport: function (val) {
        if (val) {
            game.stage.addEventListener('stagemousedown', mouseSupport.handleMouseDown);
            game.stage.addEventListener('stagemousemove', mouseSupport.handleMouseMove);
            game.stage.addEventListener('stagemouseup', mouseSupport.handleMouseUp);

            // Code from javascriptkit.com
            var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

            if (document.attachEvent) //if IE (and Opera depending on user setting)
                document.attachEvent("on" + mousewheelevt, mouseSupport.handleMouseWheel);
            else if (document.addEventListener) //WC3 browsers
                document.addEventListener(mousewheelevt, mouseSupport.handleMouseWheel, false);
        } else {
            game.stage.removeEventListener('stagemousedown', mouseSupport.handleMouseDown);
            game.stage.removeEventListener('stagemousemove', mouseSupport.handleMouseMove);
            game.stage.removeEventListener('stagemouseup', mouseSupport.handleMouseUp);

            var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

            if (document.detachEvent) //if IE (and Opera depending on user setting)
                document.detachEvent("on" + mousewheelevt, mouseSupport.handleMouseWheel);
            else if (document.removeEventListener) //WC3 browsers
                document.removeEventListener(mousewheelevt, mouseSupport.handleMouseWheel, false);
        }

    },
    prepareAssets: function () {
        console.log('preparing assets.')

        game.background = new createjs.Shape();
        game.background.graphics.beginFill('#93CCEA').drawRect(
            0,
            0,
            game.screenSize.width,
            game.screenSize.height);
        game.stage.addChild(game.background);

        for (page in game.pages) {
            game.pages[page].prepareAssets();
        }

        game.resizing();
        game.run();
    },
    run: function () {
        console.log('game running.');
        createjs.Ticker.setInterval(window.requestAnimationFrame);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick', game.tick);
    },
    resizing: function () {
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        console.log('resizing attempt: ' + screenWidth + 'x' + screenHeight);
        var needResize = false;

        if (screenWidth < 800 || screenHeight < 600) {
            if (game.screenSize.width != 640) {
                needResize = true;
                game.screenSize = { width: 640, height: 480, scale: 0.625 };
            }
        } else if (screenWidth < 1024 || screenHeight < 768) {
            if (game.screenSize.width != 800) {
                needResize = true;
                game.screenSize = { width: 800, height: 600, scale: 0.78125 };
            }
        } else if (screenWidth < 1280 || screenHeight < 960) {
            if (game.screenSize.width != 1024) {
                needResize = true;
                game.screenSize = { width: 1024, height: 768, scale: 1 };
            }
        } else {
            if (game.screenSize.width != 1280) {
                needResize = true;
                game.screenSize = { width: 1280, height: 960, scale: 1.25 };
            }
        }

        if (!needResize)
            return;

        console.log('resizing to: ' + game.screenSize.width + 'x' + game.screenSize.height);

        game.canvas.width = game.screenSize.width;
        game.canvas.height = game.screenSize.height;
        game.stage.scaleX = game.screenSize.scale;
        game.stage.scaleY = game.screenSize.scale;
    },
    tick: function () {
        game.update();
        game.draw();
    },
    prevTime: 0,
    fps: 0,
    update: function () {
        var totalTime = createjs.Ticker.getTime();
        var elapsedTime = totalTime - game.prevTime;
        game.fps = 1000 / elapsedTime >> 0;

        game.prevTime = totalTime;
        keyboardSupport.tick();
        mouseSupport.tick(elapsedTime);
        gamepadSupport.tick();


        for (page in game.pages) {
            if (game.pages[page].isVisible && game.pages[page].isEnabled)
                game.pages[page].update(elapsedTime);
        }
    },
    draw: function () {
        for (page in game.pages) {
            for (assetName in game.pages[page].assetNames) {
                if (game.pages[page].isVisible) {
                    game.stage.getChildByName(game.pages[page].assetNames[assetName]).alpha = 1;
                    game.pages[page].draw();
                }
                else
                    game.stage.getChildByName(game.pages[page].assetNames[assetName]).alpha = 0;
            }
        }

        game.stage.update();
    },
    getPageByName: function (pageName) {
        for (page in game.pages) {
            if (game.pages[page].name == pageName) {
                return game.pages[page];
            }
        }
        return null;
    }
};