var gamepadSupport = {
    ANALOGUE_BUTTON_THRESHOLD: 0.5,
    available: false,
    gamepads: [],
    prevRawGamepadTypes: [],
    prevTimestamps: [],
    init: function () {
        gamepadSupport.available = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads;
        return gamepadSupport.available;
    },
    tick: function () {
        gamepadSupport.pollStatus();
    },
    pollStatus: function () {
        gamepadSupport.pollGamepads();
        for (var i in gamepadSupport.gamepads) {
            var gamepad = gamepadSupport.gamepads[i];

            // Don’t do anything if the current timestamp is the same as previous
            // one, which means that the state of the gamepad hasn’t changed.
            // This is only supported by Chrome right now, so the first check
            // makes sure we’re not doing anything if the timestamps are empty
            // or undefined.
            if (gamepad.timestamp && (gamepad.timestamp == gamepadSupport.prevTimestamps[i])) {
                continue;
            }
            gamepadSupport.prevTimestamps[i] = gamepad.timestamp;
            gamepadSupport.updateState(i);
        }
    },
    pollGamepads: function () {
        var rawGamepads = (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) || navigator.webkitGamepads;

        if (rawGamepads) {
            // We don’t want to use rawGamepads coming straight from the browser,
            // since it can have “holes” (e.g. if you plug two gamepads, and then
            // unplug the first one, the remaining one will be at index [1]).
            gamepadSupport.gamepads = [];

            // We only refresh the display when we detect some gamepads are new
            // or removed; we do it by comparing raw gamepad table entries to
            // “undefined.”
            var gamepadsChanged = false;

            for (var i = 0; i < rawGamepads.length; i++) {
                if (typeof rawGamepads[i] != gamepadSupport.prevRawGamepadTypes[i]) {
                    gamepadsChanged = true;
                    gamepadSupport.prevRawGamepadTypes[i] = typeof rawGamepads[i];
                }

                if (rawGamepads[i]) {
                    gamepadSupport.gamepads.push(rawGamepads[i]);
                }
            }
        }
    },
    updateState: function (gamepadId) {
        var gamepad = gamepadSupport.gamepads[gamepadId];
        if (gamepad.id == 'Xbox 360 Controller (XInput STANDARD GAMEPAD)') {
            // Buttons
            gamepadSupport.xboxControllerState.BTN_X = (gamepad.buttons[2] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_Y = (gamepad.buttons[3] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_A = (gamepad.buttons[0] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_B = (gamepad.buttons[1] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_UP = (gamepad.buttons[12] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_DOWN = (gamepad.buttons[13] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_LEFT = (gamepad.buttons[14] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_RIGHT = (gamepad.buttons[15] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.SHOULDER_LEFT = (gamepad.buttons[4] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.SHOULDER_RIGHT = (gamepad.buttons[5] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_SELECT = (gamepad.buttons[8] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.BTN_START = (gamepad.buttons[9] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.STICK_LEFT_BTN = (gamepad.buttons[10] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);
            gamepadSupport.xboxControllerState.STICK_RIGHT_BTN = (gamepad.buttons[11] > gamepadSupport.ANALOGUE_BUTTON_THRESHOLD);

            // Triggers
            gamepadSupport.xboxControllerState.TRIGGER_LEFT = gamepad.buttons[6];
            gamepadSupport.xboxControllerState.TRIGGER_RIGHT = gamepad.buttons[7];

            // Sticks
            gamepadSupport.xboxControllerState.STICK_LEFT_X = gamepad.axes[0];
            gamepadSupport.xboxControllerState.STICK_LEFT_Y = gamepad.axes[1];
            gamepadSupport.xboxControllerState.STICK_RIGHT_X = gamepad.axes[2];
            gamepadSupport.xboxControllerState.STICK_RIGHT_Y = gamepad.axes[3];
        }
    },
    xboxControllerState: {
        BTN_X: false,
        BTN_Y: false,
        BTN_A: false,
        BTN_B: false,
        BTN_DOWN: false,
        BTN_UP: false,
        BTN_LEFT: false,
        BTN_RIGHT: false,
        SHOULDER_LEFT: false,
        SHOULDER_RIGHT: false,
        TRIGGER_LEFT: 0,
        TRIGGER_RIGHT: 0,
        STICK_LEFT_X: 0,
        STICK_LEFT_Y: 0,
        STICK_LEFT_BTN: false,
        STICK_RIGHT_X: 0,
        STICK_RIGHT_Y: 0,
        STICK_RIGHT_BTN: false,
        BTN_START: false,
        BTN_SELECT: false
    }
};