var debugpanel = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames: [
        'debugUL1Text',
        'debugUL2Text',
        'debugUL3Text',
        'debugUL4Text',
        'debugUR1Text',
        'debugUR2Text',
        'debugUR3Text',
        'debugUR4Text',
        'debugBL1Text',
        'debugBL2Text',
        'debugBL3Text',
        'debugBL4Text',
        'debugBR1Text',
        'debugBR2Text',
        'debugBR3Text',
        'debugBR4Text'
    ],
    prepareAssets: function () {
        // this will be called by the game engine, so add loaded assets to the stage.
        var debugUL1Text = new createjs.Text('ul1', '24px Arial', '#458B00');
        debugUL1Text.x = 10;
        debugUL1Text.y = 10;
        debugUL1Text.name = 'debugUL1Text';
        var debugUL2Text = new createjs.Text('ul2', '24px Arial', '#458B00');
        debugUL2Text.x = 10;
        debugUL2Text.y = debugUL2Text.getMeasuredHeight() + 5 + 10;
        debugUL2Text.name = 'debugUL2Text';
        var debugUL3Text = new createjs.Text('ul3', '24px Arial', '#458B00');
        debugUL3Text.x = 10;
        debugUL3Text.y = (debugUL3Text.getMeasuredHeight() + 5) * 2 + 10;
        debugUL3Text.name = 'debugUL3Text';
        var debugUL4Text = new createjs.Text('ul4', '24px Arial', '#458B00');
        debugUL4Text.x = 10;
        debugUL4Text.y = (debugUL4Text.getMeasuredHeight() + 5) * 3 + 10;
        debugUL4Text.name = 'debugUL4Text';
        var debugUR1Text = new createjs.Text('ur1', '24px Arial', '#458B00');
        debugUR1Text.x = screenSizes[screenSize].width - (debugUR1Text.getMeasuredWidth() + 10);
        debugUR1Text.y = 10;
        debugUR1Text.name = 'debugUR1Text';
        var debugUR2Text = new createjs.Text('ur2', '24px Arial', '#458B00');
        debugUR2Text.x = screenSizes[screenSize].width - (debugUR2Text.getMeasuredWidth() + 10);
        debugUR2Text.y = debugUR2Text.getMeasuredHeight() + 5 + 10;
        debugUR2Text.name = 'debugUR2Text';
        var debugUR3Text = new createjs.Text('ur3', '24px Arial', '#458B00');
        debugUR3Text.x = screenSizes[screenSize].width - (debugUR3Text.getMeasuredWidth() + 10);
        debugUR3Text.y = (debugUR3Text.getMeasuredHeight() + 5) * 2 + 10;
        debugUR3Text.name = 'debugUR3Text';
        var debugUR4Text = new createjs.Text('ur4', '24px Arial', '#458B00');
        debugUR4Text.x = screenSizes[screenSize].width - (debugUR4Text.getMeasuredWidth() + 10);
        debugUR4Text.y = (debugUR4Text.getMeasuredHeight() + 5) * 3 + 10;
        debugUR4Text.name = 'debugUR4Text';

        var debugBR1Text = new createjs.Text('br1', '24px Arial', '#458B00');
        debugBR1Text.x = screenSizes[screenSize].width - (debugBR1Text.getMeasuredWidth() + 10);
        debugBR1Text.name = 'debugBR1Text';
        var debugBR2Text = new createjs.Text('br2', '24px Arial', '#458B00');
        debugBR2Text.x = screenSizes[screenSize].width - (debugBR2Text.getMeasuredWidth() + 10);
        debugBR2Text.name = 'debugBR2Text';
        var debugBR3Text = new createjs.Text('br3', '24px Arial', '#458B00');
        debugBR3Text.x = screenSizes[screenSize].width - (debugBR3Text.getMeasuredWidth() + 10);
        debugBR3Text.name = 'debugBR3Text';
        var debugBR4Text = new createjs.Text('br4', '24px Arial', '#458B00');
        debugBR4Text.x = screenSizes[screenSize].width - (debugBR4Text.getMeasuredWidth() + 10);
        debugBR4Text.name = 'debugBR4Text';
        var debugBL1Text = new createjs.Text('bl1', '24px Arial', '#458B00');
        debugBL1Text.x = 10;
        debugBL1Text.name = 'debugBL1Text';
        var debugBL2Text = new createjs.Text('bl2', '24px Arial', '#458B00');
        debugBL2Text.x = 10;
        debugBL2Text.name = 'debugBL2Text';
        var debugBL3Text = new createjs.Text('bl3', '24px Arial', '#458B00');
        debugBL3Text.x = 10;
        debugBL3Text.name = 'debugBL3Text';
        var debugBL4Text = new createjs.Text('bl4', '24px Arial', '#458B00');
        debugBL4Text.x = 10;
        debugBL4Text.name = 'debugBL4Text';

        debugBR4Text.y = screenSizes[screenSize].height - 10;
        debugBR3Text.y = screenSizes[screenSize].height - (10 + debugBR3Text.getMeasuredHeight() + 5);
        debugBR2Text.y = screenSizes[screenSize].height - (10 + (debugBR2Text.getMeasuredHeight() + 5) * 2);
        debugBR1Text.y = screenSizes[screenSize].height - (10 + (debugBR1Text.getMeasuredHeight() + 5) * 3);

        debugBL4Text.y = screenSizes[screenSize].height - 10;
        debugBL3Text.y = screenSizes[screenSize].height - (10 + debugBL3Text.getMeasuredHeight() + 5);
        debugBL2Text.y = screenSizes[screenSize].height - (10 + (debugBL2Text.getMeasuredHeight() + 5) * 2);
        debugBL1Text.y = screenSizes[screenSize].height - (10 + (debugBL1Text.getMeasuredHeight() + 5) * 3);

        stage.addChild(debugUL1Text);
        stage.addChild(debugUL2Text);
        stage.addChild(debugUL3Text);
        stage.addChild(debugUL4Text);
        stage.addChild(debugUR1Text);
        stage.addChild(debugUR2Text);
        stage.addChild(debugUR3Text);
        stage.addChild(debugUR4Text);
        stage.addChild(debugBL1Text);
        stage.addChild(debugBL2Text);
        stage.addChild(debugBL3Text);
        stage.addChild(debugBL4Text);
        stage.addChild(debugBR1Text);
        stage.addChild(debugBR2Text);
        stage.addChild(debugBR3Text);
        stage.addChild(debugBR4Text);
    },
    qPressed: 0,
    ePressed: 0,
    xPressed: 0,
    yPressed: 0,
    xLocked: false,
    yLocked: false,
    update: function (elapsedTime) {
        if (!debugpanel.isVisible || !debugpanel.isEnabled) {
            return;
        }

        var debugUL1Text = stage.getChildByName('debugUL1Text');
        var debugUL2Text = stage.getChildByName('debugUL2Text');
        var debugUL3Text = stage.getChildByName('debugUL3Text');
        var debugUL4Text = stage.getChildByName('debugUL4Text');
        var debugUR1Text = stage.getChildByName('debugUR1Text');
        var debugUR2Text = stage.getChildByName('debugUR2Text');
        var debugUR3Text = stage.getChildByName('debugUR3Text');
        var debugUR4Text = stage.getChildByName('debugUR4Text');

        var debugBL1Text = stage.getChildByName('debugBL1Text');
        var debugBL2Text = stage.getChildByName('debugBL2Text');
        var debugBL3Text = stage.getChildByName('debugBL3Text');
        var debugBL4Text = stage.getChildByName('debugBL4Text');
        var debugBR1Text = stage.getChildByName('debugBR1Text');
        var debugBR2Text = stage.getChildByName('debugBR2Text');
        var debugBR3Text = stage.getChildByName('debugBR3Text');
        var debugBR4Text = stage.getChildByName('debugBR4Text');

        // place all your update code here, including inputs
        debugUL1Text.text = "Prev Enter: " + keyboardSupport.keyboardStatePrev.KEY_ENTER;
        debugUL2Text.text = "Curr Enter: " + keyboardSupport.keyboardState.KEY_ENTER;
        debugUL3Text.text = "Prev Esc: " + keyboardSupport.keyboardStatePrev.KEY_ESC;
        debugUL4Text.text = "Curr Esc: " + keyboardSupport.keyboardState.KEY_ESC;

        if (keyboardSupport.keyboardStateClick.KEY_ENTER) {
            debugpanel.qPressed++;
            debugBL1Text.text = "Q: " + debugpanel.qPressed;
        }
        if (keyboardSupport.keyboardStateClick.KEY_ESC) {
            debugpanel.ePressed++;
            debugBL2Text.text = "E: " + debugpanel.ePressed;
        }

        if (gamepadSupport.gamepads.length > 0) {
            debugUR1Text.text = "Prev A: " + gamepadSupport.xboxControllerStatePrev.BTN_A;
            debugUR2Text.text = "Curr A: " + gamepadSupport.xboxControllerState.BTN_A;
            debugUR3Text.text = "Prev B: " + gamepadSupport.xboxControllerStatePrev.BTN_B;
            debugUR4Text.text = "Curr B: " + gamepadSupport.xboxControllerState.BTN_B;
            debugBR1Text.text = "Clicked A: " + gamepadSupport.xboxControllerStateClick.BTN_A;
            debugBR2Text.text = "Locked A: " + gamepadSupport.xboxControllerStateLocked.BTN_A;
            debugBR3Text.text = "Clicked B: " + gamepadSupport.xboxControllerStateClick.BTN_B;
            debugBR4Text.text = "Locked B: " + gamepadSupport.xboxControllerStateLocked.BTN_B;
        }

    },
    draw: function () {
        debugpanel.drawBase();
        if (!debugpanel.isVisible) {
            return;
        }

        // place all your resize sensitive drawing manipulation here
        var debugUL1Text = stage.getChildByName('debugUL1Text');
        var debugUL2Text = stage.getChildByName('debugUL2Text');
        var debugUL3Text = stage.getChildByName('debugUL3Text');
        var debugUL4Text = stage.getChildByName('debugUL4Text');
        var debugUR1Text = stage.getChildByName('debugUR1Text');
        var debugUR2Text = stage.getChildByName('debugUR2Text');
        var debugUR3Text = stage.getChildByName('debugUR3Text');
        var debugUR4Text = stage.getChildByName('debugUR4Text');

        var debugBL1Text = stage.getChildByName('debugBL1Text');
        var debugBL2Text = stage.getChildByName('debugBL2Text');
        var debugBL3Text = stage.getChildByName('debugBL3Text');
        var debugBL4Text = stage.getChildByName('debugBL4Text');
        var debugBR1Text = stage.getChildByName('debugBR1Text');
        var debugBR2Text = stage.getChildByName('debugBR2Text');
        var debugBR3Text = stage.getChildByName('debugBR3Text');
        var debugBR4Text = stage.getChildByName('debugBR4Text');

        debugUR1Text.x = screenSizes[screenSize].width - (debugUR1Text.getMeasuredWidth() + 10);
        debugUR2Text.x = screenSizes[screenSize].width - (debugUR2Text.getMeasuredWidth() + 10);
        debugUR3Text.x = screenSizes[screenSize].width - (debugUR3Text.getMeasuredWidth() + 10);
        debugUR4Text.x = screenSizes[screenSize].width - (debugUR4Text.getMeasuredWidth() + 10);

        debugBR1Text.x = screenSizes[screenSize].width - (debugBR1Text.getMeasuredWidth() + 10);
        debugBR2Text.x = screenSizes[screenSize].width - (debugBR2Text.getMeasuredWidth() + 10);
        debugBR3Text.x = screenSizes[screenSize].width - (debugBR3Text.getMeasuredWidth() + 10);
        debugBR4Text.x = screenSizes[screenSize].width - (debugBR4Text.getMeasuredWidth() + 10);

        debugBR4Text.y = screenSizes[screenSize].height - (10 + debugBR4Text.getMeasuredHeight() + 5);
        debugBR3Text.y = screenSizes[screenSize].height - (10 + (debugBR3Text.getMeasuredHeight() + 5) * 2);
        debugBR2Text.y = screenSizes[screenSize].height - (10 + (debugBR2Text.getMeasuredHeight() + 5) * 3);
        debugBR1Text.y = screenSizes[screenSize].height - (10 + (debugBR1Text.getMeasuredHeight() + 5) * 4);

        debugBL4Text.y = screenSizes[screenSize].height - (10 + debugBL4Text.getMeasuredHeight() + 5);
        debugBL3Text.y = screenSizes[screenSize].height - (10 + (debugBL3Text.getMeasuredHeight() + 5) * 2);
        debugBL2Text.y = screenSizes[screenSize].height - (10 + (debugBL2Text.getMeasuredHeight() + 5) * 3);
        debugBL1Text.y = screenSizes[screenSize].height - (10 + (debugBL1Text.getMeasuredHeight() + 5) * 4);
    },
    drawBase: function () {
        for (an in debugpanel.assetNames) {
            if (debugpanel.isVisible) {
                stage.getChildByName(debugpanel.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(debugpanel.assetNames[an]).alpha = 0;
            }
        }

    }
};