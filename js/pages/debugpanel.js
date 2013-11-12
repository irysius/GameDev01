var debugpanel = {
    name: 'debugpanel',
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
        var fontStyle = '24px Arial';
        var fontColor = '#458B00';
        var debugUL1Text = new createjs.Text('ul1', fontStyle, fontColor);
        var debugUL2Text = new createjs.Text('ul2', fontStyle, fontColor);
        var debugUL3Text = new createjs.Text('ul3', fontStyle, fontColor);
        var debugUL4Text = new createjs.Text('ul4', fontStyle, fontColor);
        debugUL1Text.name = 'debugUL1Text';
        debugUL2Text.name = 'debugUL2Text';
        debugUL3Text.name = 'debugUL3Text';
        debugUL4Text.name = 'debugUL4Text';

        var debugUR1Text = new createjs.Text('ur1', fontStyle, fontColor);
        var debugUR2Text = new createjs.Text('ur2', fontStyle, fontColor);
        var debugUR3Text = new createjs.Text('ur3', fontStyle, fontColor);
        var debugUR4Text = new createjs.Text('ur4', fontStyle, fontColor);
        debugUR1Text.name = 'debugUR1Text';
        debugUR2Text.name = 'debugUR2Text';
        debugUR3Text.name = 'debugUR3Text';
        debugUR4Text.name = 'debugUR4Text';

        var debugBR1Text = new createjs.Text('br1', fontStyle, fontColor);
        var debugBR2Text = new createjs.Text('br2', fontStyle, fontColor);
        var debugBR3Text = new createjs.Text('br3', fontStyle, fontColor);
        var debugBR4Text = new createjs.Text('br4', fontStyle, fontColor);
        debugBR1Text.name = 'debugBR1Text';
        debugBR2Text.name = 'debugBR2Text';
        debugBR3Text.name = 'debugBR3Text';
        debugBR4Text.name = 'debugBR4Text';

        var debugBL1Text = new createjs.Text('bl1', fontStyle, fontColor);
        var debugBL2Text = new createjs.Text('bl2', fontStyle, fontColor);
        var debugBL3Text = new createjs.Text('bl3', fontStyle, fontColor);
        var debugBL4Text = new createjs.Text('bl4', fontStyle, fontColor);
        debugBL1Text.name = 'debugBL1Text';
        debugBL2Text.name = 'debugBL2Text';
        debugBL3Text.name = 'debugBL3Text';
        debugBL4Text.name = 'debugBL4Text';

        debugBL1Text.x = 10;
        debugBL2Text.x = 10;
        debugBL3Text.x = 10;
        debugBL4Text.x = 10;
        debugUL1Text.x = 10;
        debugUL2Text.x = 10;
        debugUL3Text.x = 10;
        debugUL4Text.x = 10;

        debugUL1Text.y = 10;
        debugUR1Text.y = 10;
        debugUL2Text.y = debugUL2Text.getMeasuredHeight() + 5 + 10;
        debugUR2Text.y = debugUR2Text.getMeasuredHeight() + 5 + 10;
        debugUL3Text.y = (debugUL3Text.getMeasuredHeight() + 5) * 2 + 10;
        debugUR3Text.y = (debugUR3Text.getMeasuredHeight() + 5) * 2 + 10;
        debugUL4Text.y = (debugUL4Text.getMeasuredHeight() + 5) * 3 + 10;
        debugUR4Text.y = (debugUR4Text.getMeasuredHeight() + 5) * 3 + 10;

        var screenWidth = game.baseScreenSize.width;
        var screenHeight = game.baseScreenSize.height;

        debugUR1Text.x = screenWidth - (debugUR1Text.getMeasuredWidth() + 10);
        debugUR2Text.x = screenWidth - (debugUR2Text.getMeasuredWidth() + 10);
        debugUR3Text.x = screenWidth - (debugUR3Text.getMeasuredWidth() + 10);
        debugUR4Text.x = screenWidth - (debugUR4Text.getMeasuredWidth() + 10);

        debugBR1Text.y = screenHeight - (10 + (debugBR1Text.getMeasuredHeight() * 4) + 5 * 3);
        debugBL1Text.y = screenHeight - (10 + (debugBL1Text.getMeasuredHeight() * 4) + 5 * 3);
        debugBR2Text.y = screenHeight - (10 + (debugBR2Text.getMeasuredHeight() * 3) + 5 * 2);
        debugBL2Text.y = screenHeight - (10 + (debugBL2Text.getMeasuredHeight() * 3) + 5 * 2);
        debugBR3Text.y = screenHeight - (10 + (debugBR3Text.getMeasuredHeight() * 2) + 5);
        debugBL3Text.y = screenHeight - (10 + (debugBL3Text.getMeasuredHeight() * 2) + 5);
        debugBR4Text.y = screenHeight - (10 + debugBR4Text.getMeasuredHeight());
        debugBL4Text.y = screenHeight - (10 + debugBL4Text.getMeasuredHeight());

        debugBR1Text.x = screenWidth - (debugBR1Text.getMeasuredWidth() + 10);
        debugBR2Text.x = screenWidth - (debugBR2Text.getMeasuredWidth() + 10);
        debugBR3Text.x = screenWidth - (debugBR3Text.getMeasuredWidth() + 10);
        debugBR4Text.x = screenWidth - (debugBR4Text.getMeasuredWidth() + 10);

        game.stage.addChild(debugUL1Text);
        game.stage.addChild(debugUL2Text);
        game.stage.addChild(debugUL3Text);
        game.stage.addChild(debugUL4Text);
        game.stage.addChild(debugUR1Text);
        game.stage.addChild(debugUR2Text);
        game.stage.addChild(debugUR3Text);
        game.stage.addChild(debugUR4Text);
        game.stage.addChild(debugBL1Text);
        game.stage.addChild(debugBL2Text);
        game.stage.addChild(debugBL3Text);
        game.stage.addChild(debugBL4Text);
        game.stage.addChild(debugBR1Text);
        game.stage.addChild(debugBR2Text);
        game.stage.addChild(debugBR3Text);
        game.stage.addChild(debugBR4Text);
    },
    variables: {
        qPressed: 0,
        ePressed: 0,
        xPressed: 0,
        yPressed: 0
    },
    update: function (elapsedTime) {
        // Obtain reference to all of the debug slots.
        var debugUL1Text = game.stage.getChildByName('debugUL1Text');
        var debugUL2Text = game.stage.getChildByName('debugUL2Text');
        var debugUL3Text = game.stage.getChildByName('debugUL3Text');
        var debugUL4Text = game.stage.getChildByName('debugUL4Text');
        var debugUR1Text = game.stage.getChildByName('debugUR1Text');
        var debugUR2Text = game.stage.getChildByName('debugUR2Text');
        var debugUR3Text = game.stage.getChildByName('debugUR3Text');
        var debugUR4Text = game.stage.getChildByName('debugUR4Text');
        var debugBL1Text = game.stage.getChildByName('debugBL1Text');
        var debugBL2Text = game.stage.getChildByName('debugBL2Text');
        var debugBL3Text = game.stage.getChildByName('debugBL3Text');
        var debugBL4Text = game.stage.getChildByName('debugBL4Text');
        var debugBR1Text = game.stage.getChildByName('debugBR1Text');
        var debugBR2Text = game.stage.getChildByName('debugBR2Text');
        var debugBR3Text = game.stage.getChildByName('debugBR3Text');
        var debugBR4Text = game.stage.getChildByName('debugBR4Text');

        // place all your update code here, including inputs
        debugUL1Text.text = "Mouse X: " + mouseSupport.mouseState.X;
        debugUL2Text.text = "Mouse Y: " + mouseSupport.mouseState.Y;
        debugUL3Text.text = "Mouse LMB: " + mouseSupport.mouseState.LMB;
        debugUL4Text.text = "Mouse Click: " + mouseSupport.mouseStateClick.LMB;

        debugUR1Text.text = "Wheel: " + mouseSupport.mouseState.WHEEL;
        debugUR2Text.text = "Wheel Delta: " + mouseSupport.mouseState.WHEEL_DELTA;
        debugUR3Text.text = "";
        debugUR4Text.text = "";

        if (mouseSupport.mouseStateDrag.DRAGGING) {
            debugBL1Text.text = "Drag Start: " + mouseSupport.mouseStateDrag.BEGIN_X + "," + mouseSupport.mouseStateDrag.BEGIN_Y;
            debugBL2Text.text = "MOVE: " + mouseSupport.mouseStateDrag.MOVE_DELTA;
            debugBL3Text.text = "NET: " + mouseSupport.mouseStateDrag.TIME_DELTA;
            debugBL4Text.text = "Drag End: " + mouseSupport.mouseStateDrag.END_X + "," + mouseSupport.mouseStateDrag.END_Y;
        } else {
            debugBL1Text.text = "";
            debugBL2Text.text = "";
        }
    },
    draw: function () {
        var debugUR1Text = game.stage.getChildByName('debugUR1Text');
        var debugUR2Text = game.stage.getChildByName('debugUR2Text');
        var debugUR3Text = game.stage.getChildByName('debugUR3Text');
        var debugUR4Text = game.stage.getChildByName('debugUR4Text');
        var debugBL1Text = game.stage.getChildByName('debugBL1Text');
        var debugBL2Text = game.stage.getChildByName('debugBL2Text');
        var debugBL3Text = game.stage.getChildByName('debugBL3Text');
        var debugBL4Text = game.stage.getChildByName('debugBL4Text');
        var debugBR1Text = game.stage.getChildByName('debugBR1Text');
        var debugBR2Text = game.stage.getChildByName('debugBR2Text');
        var debugBR3Text = game.stage.getChildByName('debugBR3Text');
        var debugBR4Text = game.stage.getChildByName('debugBR4Text');

        var screenWidth = game.baseScreenSize.width;
        var screenHeight = game.baseScreenSize.height;

        debugUR1Text.x = screenWidth - (debugUR1Text.getMeasuredWidth() + 10);
        debugUR2Text.x = screenWidth - (debugUR2Text.getMeasuredWidth() + 10);
        debugUR3Text.x = screenWidth - (debugUR3Text.getMeasuredWidth() + 10);
        debugUR4Text.x = screenWidth - (debugUR4Text.getMeasuredWidth() + 10);

        debugBR1Text.y = screenHeight - (10 + (debugBR1Text.getMeasuredHeight() * 4) + 5 * 3);
        debugBL1Text.y = screenHeight - (10 + (debugBL1Text.getMeasuredHeight() * 4) + 5 * 3);
        debugBR2Text.y = screenHeight - (10 + (debugBR2Text.getMeasuredHeight() * 3) + 5 * 2);
        debugBL2Text.y = screenHeight - (10 + (debugBL2Text.getMeasuredHeight() * 3) + 5 * 2);
        debugBR3Text.y = screenHeight - (10 + (debugBR3Text.getMeasuredHeight() * 2) + 5);
        debugBL3Text.y = screenHeight - (10 + (debugBL3Text.getMeasuredHeight() * 2) + 5);
        debugBR4Text.y = screenHeight - (10 + debugBR4Text.getMeasuredHeight());
        debugBL4Text.y = screenHeight - (10 + debugBL4Text.getMeasuredHeight());

        debugBR1Text.x = screenWidth - (debugBR1Text.getMeasuredWidth() + 10);
        debugBR2Text.x = screenWidth - (debugBR2Text.getMeasuredWidth() + 10);
        debugBR3Text.x = screenWidth - (debugBR3Text.getMeasuredWidth() + 10);
        debugBR4Text.x = screenWidth - (debugBR4Text.getMeasuredWidth() + 10);
    }
};