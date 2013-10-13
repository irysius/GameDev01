var worldpage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames: [],
    prepareAssets: function () {
        // this will be called by the game engine, so add loaded assets to the stage.

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
    },
    update: function (elapsedTime) {
        if (!worldpage.isVisible || !worldpage.isEnabled) {
            return;
        }

        // place all your update code here, including inputs
        // ACTIONS: Left, Right, Select, Confirm, Cancel, and Return to Main Menu
        var left = keyboardSupport.keyboardState.KEY_LEFT || keyboardSupport.keyboardState.KEY_A;
        var right = keyboardSupport.keyboardState.KEY_RIGHT || keyboardSupport.keyboardState.KEY_D;
        var idle = !left && !right;
        var yes = (keyboardSupport.keyboardStatePrev.KEY_ENTER || !keyboardSupport.keyboardState.KEY_ENTER);
        var no = (keyboardSupport.keyboardStatePrev.KEY_ESC || !keyboardSupport.keyboardState.KEY_ESC);

        if (gamepadSupport.available) {
            var rightX = gamepadSupport.xboxControllerState.STICK_RIGHT_X;
            var prevA = gamepadSupport.xboxControllerStatePrev.BTN_A;
            var currA = gamepadSupport.xboxControllerState.BTN_A;
            var prevB = gamepadSupport.xboxControllerStatePrev.BTN_B;
            var currB = gamepadSupport.xboxControllerState.BTN_B;
            left = left || (rightX < -0.9);
            right = right || (rightX > -0.9);
            idle = idle && (-0.2 < rightX && rightX < 0.2);
            yes = yes || (prevA && !currA);
            no = no || (prevB && !currB);
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
    moveLeft: function () {
        worldpage.stageSelection--;
        if (worldpage.stageSelection < 0) worldpage.stageSelection = 0;
        worldpage.selectionLocked = true;
    },
    moveRight: function () {
        worldpage.stageSelection++;
        if (worldpage.stageSelection > 10) worldpage.stageSelection = 10;
        worldpage.selectionLocked = true;
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
        worldpage.drawBase();
        if (!worldpage.isVisible) {
            return;
        }

        // place all your resize sensitive drawing manipulation here

    },
    drawBase: function () {
        for (an in worldpage.assetNames) {
            if (worldpage.isVisible) {
                stage.getChildByName(worldpage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(worldpage.assetNames[an]).alpha = 0;
            }
        }

    }
};