var worldpage = {
    name: 'worldpage',
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames: [
        'stage1circle',
        'stage2circle',
        'stage3circle',
        'stage4circle',
        'stage5circle',
        'stage6circle'
    ],
    prepareAssets: function () {
        // this will be called by the game engine, so add loaded assets to the stage.
        var stage1circle = new createjs.Shape();
        stage1circle.graphics.beginFill('#FF0000').drawCircle(30, 300, 30);
        stage1circle.name = 'stage1circle';
        var stage2circle = new createjs.Shape();
        stage2circle.graphics.beginFill('#FF0000').drawCircle(130, 300, 30);
        stage2circle.name = 'stage2circle';
        var stage3circle = new createjs.Shape();
        stage3circle.graphics.beginFill('#FF0000').drawCircle(230, 300, 30);
        stage3circle.name = 'stage3circle';
        var stage4circle = new createjs.Shape();
        stage4circle.graphics.beginFill('#FF0000').drawCircle(330, 300, 30);
        stage4circle.name = 'stage4circle';
        var stage5circle = new createjs.Shape();
        stage5circle.graphics.beginFill('#FF0000').drawCircle(430, 300, 30);
        stage5circle.name = 'stage5circle';
        var stage6circle = new createjs.Shape();
        stage6circle.graphics.beginFill('#FF0000').drawCircle(530, 300, 30);
        stage6circle.name = 'stage6circle';

        var modalRectangle = new createjs.Rectangle(
            (game.screenSize.width - 640) / 2,
            (game.screenSize.height - 480) / 2,
            640,
            480);

        var modalBackground = new createjs.Shape();
        modalBackground.graphics.beginFill('#888888').drawRect(
            modalRectangle.x,
            modalRectangle.y,
            modalRectangle.width,
            modalRectangle.height);
        modalBackground.name = 'modalBackground';

        var modalText = new createjs.Text('Are You Sure?', '32px Arial', '#000000');
        modalText.x = modalRectangle.x + modalRectangle.width / 2 - modalText.getMeasuredWidth() / 2;
        modalText.y = modalRectangle.y + 10;
        modalText.name = 'modalText';
        var modalConfirm = new createjs.Text('Confirm', '32px Arial', '#000000');
        modalConfirm.x = modalRectangle.x + 10;
        modalConfirm.y = modalRectangle.y + modalRectangle.height - (modalConfirm.getMeasuredHeight() + 10);
        modalConfirm.name = 'modalConfirm';
        var modalDeny = new createjs.Text('Deny', '32px Arial', '#000000');
        modalDeny.x = modalRectangle.x + modalRectangle.width - (modalDeny.getMeasuredWidth() + 10);
        modalDeny.y = modalRectangle.y + modalRectangle.height - (modalDeny.getMeasuredHeight() + 10);
        modalDeny.name = 'modalDeny';

        game.stage.addChild(stage1circle);
        game.stage.addChild(stage2circle);
        game.stage.addChild(stage3circle);
        game.stage.addChild(stage4circle);
        game.stage.addChild(stage5circle);
        game.stage.addChild(stage6circle);

        game.stage.addChild(modalBackground);
        game.stage.addChild(modalText);
        game.stage.addChild(modalDeny);
        game.stage.addChild(modalConfirm);

        worldpage.resetAllCirclesExcept(worldpage.stageSelection);
    },
    pageState: 0, // 0 normal, 1 confirm selection, -1 back to main page
    stageSelection: 0,
    selectionLocked: false,
    selectionChangeThreshold: 750,
    selectionChangeTrackedTime: 0,
    reset: function () {
        worldpage.isVisible = true;
        worldpage.isEnabled = true;
        worldpage.pageState = 0;
        worldpage.stageSelection = 0;
        worldpage.selectionLocked = false;
        worldpage.selectionChangeTrackedTime = 0;
        worldpage.resetAllCirclesExcept(worldpage.stageSelection);
    },
    update: function (elapsedTime) {
        // place all your update code here, including inputs
        // ACTIONS: Left, Right, Select, Confirm, Cancel, and Return to Main Menu
        var left = keyboardSupport.keyboardState.KEY_LEFT || keyboardSupport.keyboardState.KEY_A;
        var right = keyboardSupport.keyboardState.KEY_RIGHT || keyboardSupport.keyboardState.KEY_D;
        var idle = !left && !right;
        var yes = keyboardSupport.keyboardStateClick.KEY_ENTER;
        var no = keyboardSupport.keyboardStateClick.KEY_ESC;

        if (gamepadSupport.gamepads.length > 0) {
            var rightX = gamepadSupport.xboxControllerState.STICK_RIGHT_X;
            yes = yes || gamepadSupport.xboxControllerStateClick.BTN_A;
            no = no || gamepadSupport.xboxControllerStateClick.BTN_B;
            left = left || (rightX < -0.9);
            right = right || (rightX > 0.9);
            idle = idle && (-0.2 < rightX && rightX < 0.2);
        }

        if (idle) {
            worldpage.resetHolding();
        } else if (left) {
            if (!worldpage.selectionLocked) {
                worldpage.moveLeft();
            } else {
                worldpage.updateHolding(elapsedTime);
            }
        } else if (right) {
            if (!worldpage.selectionLocked) {
                worldpage.moveRight();
            } else {
                worldpage.updateHolding(elapsedTime);
            }
        }

        if (yes) {
            switch (worldpage.pageState) {
                case 0:
                    worldpage.selectStage();
                    break;
                case 1:
                    worldpage.confirmSelection();
                    break;
            }
        } else if (no) {
            switch (worldpage.pageState) {
                case 0:
                    worldpage.returnToMain();
                    break;
                case 1:
                    worldpage.cancelSelection();
                    break;
            }
        }
    },
    resetHolding: function () {
        worldpage.selectionLocked = false;
        worldpage.selectionChangeTrackedTime = 0;
    },
    updateHolding: function (elapsedTime) {

    },
    resetAllCirclesExcept: function (stageSelect) {
        var stage1circle = game.stage.getChildByName('stage1circle');
        var stage2circle = game.stage.getChildByName('stage2circle');
        var stage3circle = game.stage.getChildByName('stage3circle');
        var stage4circle = game.stage.getChildByName('stage4circle');
        var stage5circle = game.stage.getChildByName('stage5circle');
        var stage6circle = game.stage.getChildByName('stage6circle');

        stage1circle.y = 300;
        stage2circle.y = 300;
        stage3circle.y = 300;
        stage4circle.y = 300;
        stage5circle.y = 300;
        stage6circle.y = 300;

        switch (stageSelect) {
            case 0:
                stage1circle.y = 200;
                console.log('setting circle 1 to ' + stage1circle.y);
                console.log('setting circle 3 to ' + stage3circle.y);
                break;
            case 1:
                stage2circle.y = 200;
                break;
            case 2:
                stage3circle.y = 200;
                break;
            case 3:
                stage4circle.y = 200;
                break;
            case 4:
                stage5circle.y = 200;
                break;
            case 5:
                stage6circle.y = 200;
                break;
        }
    },
    moveLeft: function () {
        worldpage.stageSelection--;
        if (worldpage.stageSelection < 0) worldpage.stageSelection = 0;
        worldpage.selectionLocked = true;
        worldpage.resetAllCirclesExcept(worldpage.stageSelection);
    },
    moveRight: function () {
        worldpage.stageSelection++;
        if (worldpage.stageSelection > 5) worldpage.stageSelection = 5;
        worldpage.selectionLocked = true;
        worldpage.resetAllCirclesExcept(worldpage.stageSelection);
    },
    selectStage: function () {
        worldpage.pageState = 1;
    },
    confirmSelection: function () {
    },
    cancelSelection: function () {
        worldpage.pageState = 0;
    },
    returnToMain: function () {
    },
    draw: function () {
        // place all your resize sensitive drawing manipulation here
        worldpage.drawModal();
    },
    drawModal: function () {
        var modalBackground = game.stage.getChildByName('modalBackground');
        var modalText = game.stage.getChildByName('modalText');
        var modalDeny = game.stage.getChildByName('modalDeny');
        var modalConfirm = game.stage.getChildByName('modalConfirm');

        if (worldpage.pageState == 1) {
            modalBackground.alpha = 0.5;
            modalText.alpha = 1;
            modalConfirm.alpha = 1;
            modalDeny.alpha = 1;

            //worldpage.modalRectangle = new createjs.Rectangle(
            //((ss.width - 640 * ss.scale) / 2),
            //((ss.height - 480 * ss.scale) / 2),
            //640 * ss.scale,
            //480 * ss.scale);

            //modalBackground.x = worldpage.modalRectangle.x;
            //modalBackground.y = worldpage.modalRectangle.y;

            //modalText.x = worldpage.modalRectangle.x + worldpage.modalRectangle.width / 2 - modalText.getMeasuredWidth() * ss.scale / 2;
            //modalText.y = worldpage.modalRectangle.y + 10 * ss.scale;
            //modalConfirm.x = worldpage.modalRectangle.x + 10 * ss.scale;
            //modalConfirm.y = worldpage.modalRectangle.y + worldpage.modalRectangle.height - (modalConfirm.getMeasuredHeight() + 10) * ss.scale;
            //modalDeny.x = worldpage.modalRectangle.x + worldpage.modalRectangle.width - (modalDeny.getMeasuredWidth() + 10) * ss.scale;
            //modalDeny.y = worldpage.modalRectangle.y + worldpage.modalRectangle.height - (modalDeny.getMeasuredHeight() + 10) * ss.scale;
        } else {
            modalBackground.alpha = 0;
            modalText.alpha = 0;
            modalConfirm.alpha = 0;
            modalDeny.alpha = 0;
        }
    }
};
