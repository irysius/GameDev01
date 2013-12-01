var mouseSupport = {
    tick: function (elapsedTime) {
        mouseSupport.updateState(elapsedTime);
    },
    updateState: function (elapsedTime) {
        mouseSupport.mouseStatePrev.X = mouseSupport.mouseState.X;
        mouseSupport.mouseStatePrev.Y = mouseSupport.mouseState.Y;
        mouseSupport.mouseStatePrev.LMB = mouseSupport.mouseState.LMB;
        mouseSupport.mouseStatePrev.WHEEL = mouseSupport.mouseState.WHEEL;
        mouseSupport.mouseStatePrev.WHEEL_DELTA = mouseSupport.mouseState.WHEEL_DELTA;

        mouseSupport.mouseState.X = mouseSupport.rawMouseState.X;
        mouseSupport.mouseState.Y = mouseSupport.rawMouseState.Y;
        mouseSupport.mouseState.LMB = mouseSupport.rawMouseState.LMB;
        mouseSupport.mouseState.WHEEL = mouseSupport.rawMouseState.WHEEL;
        mouseSupport.mouseState.WHEEL_DELTA = mouseSupport.rawMouseState.WHEEL_DELTA;

        mouseSupport.rawMouseState.WHEEL_DELTA = 0;

        if (mouseSupport.mouseStateClick.LMB) {
            mouseSupport.mouseStateClick.LMB = false;
            mouseSupport.mouseStateClick.X = 0;
            mouseSupport.mouseStateClick.Y = 0;
        }

        if (mouseSupport.mouseStatePrev.LMB && !mouseSupport.mouseState.LMB) {
            mouseSupport.mouseStateClick.LMB = true;
            mouseSupport.mouseStateClick.X = mouseSupport.mouseState.X;
            mouseSupport.mouseStateClick.Y = mouseSupport.mouseState.Y;
        }

        if (mouseSupport.mouseStateDrag.DRAGGING && mouseSupport.mouseState.LMB) {
            mouseSupport.mouseStateDrag.MOVE_DELTA = mouseSupport.rawMouseState.TIMESTAMP - mouseSupport.mouseStateDrag.BEGIN_TIME;
            mouseSupport.mouseStateDrag.TIME_DELTA += elapsedTime;
        }

        if (mouseSupport.mouseStateDrag.DRAGGING && !mouseSupport.mouseState.LMB) {
            if (mouseSupport.mouseStateDrag.END_TIME == 0) {
                mouseSupport.mouseStateDrag.END_X = mouseSupport.mouseState.X;
                mouseSupport.mouseStateDrag.END_Y = mouseSupport.mouseState.Y;
                mouseSupport.mouseStateDrag.END_TIME = mouseSupport.rawMouseState.TIMESTAMP;
                mouseSupport.mouseStateDrag.MOVE_DELTA = mouseSupport.mouseStateDrag.END_TIME - mouseSupport.mouseStateDrag.BEGIN_TIME;
            } else {
                mouseSupport.mouseStateDrag.DRAGGING = false;
                mouseSupport.mouseStateDrag.BEGIN_X = 0;
                mouseSupport.mouseStateDrag.BEGIN_Y = 0;
                mouseSupport.mouseStateDrag.BEGIN_TIME = 0;
                mouseSupport.mouseStateDrag.END_X = 0;
                mouseSupport.mouseStateDrag.END_Y = 0;
                mouseSupport.mouseStateDrag.END_TIME = 0;
                mouseSupport.mouseStateDrag.MOVE_DELTA = 0;
                mouseSupport.mouseStateDrag.TIME_DELTA = 0;
            }
        }

        if (!mouseSupport.mouseStateDrag.DRAGGING && mouseSupport.mouseState.LMB) {
            mouseSupport.mouseStateDrag.DRAGGING = true;
            mouseSupport.mouseStateDrag.BEGIN_X = mouseSupport.mouseState.X;
            mouseSupport.mouseStateDrag.BEGIN_Y = mouseSupport.mouseState.Y;
            mouseSupport.mouseStateDrag.BEGIN_TIME = mouseSupport.rawMouseState.TIMESTAMP;
        }
    },
    handleMouseDown: function (evt) {
        mouseSupport.rawMouseState.LMB = true;
        mouseSupport.rawMouseState.X = evt.stageX / game.screenSize.scale;
        mouseSupport.rawMouseState.Y = evt.stageY / game.screenSize.scale;
        mouseSupport.rawMouseState.TIMESTAMP = evt.timeStamp;
    },
    handleMouseUp: function (evt) {
        mouseSupport.rawMouseState.LMB = false;
        mouseSupport.rawMouseState.X = evt.stageX / game.screenSize.scale;
        mouseSupport.rawMouseState.Y = evt.stageY / game.screenSize.scale;
        mouseSupport.rawMouseState.TIMESTAMP = evt.timeStamp;
    },
    handleMouseMove: function (evt) {
        mouseSupport.rawMouseState.X = evt.stageX / game.screenSize.scale;
        mouseSupport.rawMouseState.Y = evt.stageY / game.screenSize.scale;
        mouseSupport.rawMouseState.TIMESTAMP = evt.timeStamp;
    },
    handleMouseWheel: function (e) {
        var evt = window.event || e //equalize event object
        var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
        mouseSupport.rawMouseState.WHEEL += delta;
        mouseSupport.rawMouseState.WHEEL_DELTA = delta;
    },
    resetMouseWheel: function () {
        mouseSupport.rawMouseState.WHEEL = 0;
    },
    rawMouseState: {
        X: 0,
        Y: 0,
        LMB: false,
        WHEEL: 0,
        TIMESTAMP: 0,
        WHEEL_DELTA: 0
    },
    mouseState: {
        LMB: false,
        WHEEL: 0,
        WHEEL_DELTA: 0,
        X: 0,
        Y: 0
    },
    mouseStatePrev: {
        LMB: false,
        WHEEL: 0,
        WHEEL_DELTA: 0,
        X: 0,
        Y: 0
    },
    mouseStateClick: {
        LMB: false,
        X: 0,
        Y: 0
    },
    mouseStateDrag: {
        DRAGGING: false,
        BEGIN_X: 0,
        BEGIN_Y: 0,
        BEGIN_TIME: 0,
        END_X: 0,
        END_Y: 0,
        END_TIME: 0,
        TIME_DELTA: 0, // Gets updated whether or not the cursor is moving
        MOVE_DELTA: 0 // ONLY gets updated if the cursor is moving
    }
}