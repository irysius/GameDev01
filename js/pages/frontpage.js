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
        stage.addChild(txtStartPresentation);
        var txtCredits = new createjs.Text("Credits", "48px Arial", "#000000");
        txtCredits.name = 'txtCredits';
        stage.addChild(txtCredits);

        var ballImage = preload.getResult('ballImage');
        var ballBitmap = new createjs.Bitmap(ballImage);
        ballBitmap.name = 'ballBitmap';
        stage.addChild(ballBitmap);

    },
    update: function (elapsedTime) {
        if (frontpage.selectionChangeThreshold < 0) {
            frontpage.selectionChangeThreshold = 0;
        }
        if (!frontpage.isVisible || !frontpage.isEnabled) {
            return;
        }

        var rightY = 0;
        var down = keyboardSupport.keyboardState.KEY_DOWN || keyboardSupport.keyboardState.KEY_S;
        var up = keyboardSupport.keyboardState.KEY_UP || keyboardSupport.keyboardState.KEY_W;
        if (gamepadSupport.available) {
            rightY = gamepadSupport.xboxControllerState.STICK_RIGHT_Y;
        }

        if (-0.2 < rightY && rightY < 0.2 && !down && !up) {
                frontpage.resetHolding();
        } else if (rightY > 0.9 || down) {
            if (!frontpage.selectionLocked) {
                frontpage.moveSelectionDown();
            } else {
                frontpage.updateHolding(elapsedTime);
            }
        } else if (rightY < -0.9 || up) {
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
        frontpage.drawBase();

        if (!frontpage.isVisible) {
            return;
        }
        var ss = screenSizes[screenSize];

        var txtStartPresentation = stage.getChildByName('txtStartPresentation');
        txtStartPresentation.x = ss.width - ((txtStartPresentation.getMeasuredWidth() + 20) * ss.scale);
        txtStartPresentation.y = ss.height - (220 * ss.scale);
        txtStartPresentation.color = "#000000";
        var txtCredits = stage.getChildByName('txtCredits');
        txtCredits.x = ss.width - ((txtCredits.getMeasuredWidth() + 20) * ss.scale);
        txtCredits.y = ss.height - (150 * ss.scale);
        txtCredits.color = "#000000";

        switch (frontpage.currentselection) {
            case 0:
                txtStartPresentation.color = "#FF0000";
                break;
            case 1:
                txtCredits.color = "#FF0000";
                break;
        }
    },
    drawBase: function () {
        for (an in frontpage.assetNames) {
            if (frontpage.isVisible) {
                stage.getChildByName(frontpage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(frontpage.assetNames[an]).alpha = 0;
            }
        }
    }
};