var frontpage = {
    isVisible: true,
    isEnabled: true,
    currentselection: 0,
    baseSelectionChangeThreshold: 1000,
    selectionChangeReduction: 250,
    selectionChangeThreshold: 1000,
    selectionChangeTrackedTime: 0,
    selectionLocked: false,
    manifest: [
        { id: 'ballImage', src: 'img/ball.png' }
    ],
    assetNames: [
        'txtStartPresentation',
        'txtCredits',
        'ballBitmap'
    ],
    prepareAssets: function () {
        var txtStartPresentation = new createjs.Text("Start Presentation", "48px Arial", "#000000");
        txtStartPresentation.name = 'txtStartPresentation';
        var txtCredits = new createjs.Text("Credits", "48px Arial", "#000000");
        txtCredits.name = 'txtCredits';

        txtCredits.x = game.screenSize.width - (txtCredits.getMeasuredWidth() + 50);
        txtCredits.y = game.screenSize.height - (txtCredits.getMeasuredHeight() + 100);
        console.log('Credits coords: ' + txtCredits.x + ',' + txtCredits.y);

        txtStartPresentation.x = game.screenSize.width - (txtStartPresentation.getMeasuredWidth() + 50);
        txtStartPresentation.y = txtCredits.y - (txtStartPresentation.getMeasuredHeight() + 15);
        console.log('Presentation coords: ' + txtStartPresentation.x + ',' + txtStartPresentation.y);

        var ballImage = game.preload.getResult('ballImage');
        var ballBitmap = new createjs.Bitmap(ballImage);
        ballBitmap.name = 'ballBitmap';

        game.stage.addChild(txtStartPresentation);
        game.stage.addChild(txtCredits);
        game.stage.addChild(ballBitmap);
    },
    update: function (elapsedTime) {        
        if (frontpage.selectionChangeThreshold < 0) {
            frontpage.selectionChangeThreshold = 0;
        }

        var down = keyboardSupport.keyboardState.KEY_DOWN || keyboardSupport.keyboardState.KEY_S;
        var up = keyboardSupport.keyboardState.KEY_UP || keyboardSupport.keyboardState.KEY_W;
        var idle = !down && !up;

        if (gamepadSupport.gamepads.length > 0) {
            rightY = gamepadSupport.xboxControllerState.STICK_RIGHT_Y;
            down = down || (rightY > 0.9);
            up = up || (rightY < -0.9);
            idle = idle && (-0.2 < rightY && rightY < 0.2);
        }

        if (idle) {
            frontpage.resetHolding();
        } else if (down) {
            if (!frontpage.selectionLocked) {
                frontpage.moveSelectionDown();
            } else {
                frontpage.updateHolding(elapsedTime);
            }
        } else if (up) {
            if (!frontpage.selectionLocked) {
                frontpage.moveSelectionUp();
            } else {
                frontpage.updateHolding(elapsedTime);
            }
        }
    },
    moveSelectionDown: function () {
        frontpage.currentselection--;
        if (frontpage.currentselection < 0) frontpage.currentselection = 1;
        frontpage.selectionLocked = true;
    },
    moveSelectionUp: function () {
        frontpage.currentselection++;
        if (frontpage.currentselection > 1) frontpage.currentselection = 0;
        frontpage.selectionLocked = true;
    },
    resetHolding: function () {
        frontpage.selectionLocked = false;
        frontpage.selectionChangeTrackedTime = 0;
        frontpage.selectionChangeThreshold = frontpage.baseSelectionChangeThreshold;
    },
    updateHolding: function (elapsedTime) {
        frontpage.selectionChangeTrackedTime += elapsedTime;
        if (frontpage.selectionChangeTrackedTime > frontpage.selectionChangeThreshold) {
            frontpage.selectionLocked = false;
            frontpage.selectionChangeTrackedTime = 0;
            frontpage.selectionChangeThreshold -= frontpage.selectionChangeReduction;
        }
    },
    draw: function () {
        var txtStartPresentation = game.stage.getChildByName('txtStartPresentation');
        txtStartPresentation.color = "#000000";
        var txtCredits = game.stage.getChildByName('txtCredits');
        txtCredits.color = "#000000";

        switch (frontpage.currentselection) {
            case 0:
                txtStartPresentation.color = "#FF0000";
                break;
            case 1:
                txtCredits.color = "#FF0000";
                break;
        }
    }
};