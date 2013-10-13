var keyboardSupport = {
    keyEnums: {
        'KEY_LEFT': 37,
        'KEY_UP': 38,
        'KEY_RIGHT': 39,
        'KEY_DOWN': 40,
        'KEY_A': 65,
        'KEY_S': 83,
        'KEY_D': 68,
        'KEY_W': 87,
        'KEY_SPACE': 32,
        'KEY_Q': 81,
        'KEY_E': 69,
        'KEY_R': 82,
        'KEY_Z': 90,
        'KEY_X': 88,
        'KEY_C': 67,
        'KEY_1': 49,
        'KEY_2': 50,
        'KEY_3': 51,
        'KEY_4': 52,
        'KEY_5': 53,
        'KEY_6': 54,
        'KEY_7': 55,
        'KEY_8': 56,
        'KEY_9': 57,
        'KEY_0': 48,
        'KEY_ENTER' : 0,
        'KEY_ESC' : 0
    },
    pressedKeys: {},
    handleKeyDown: function (e) {
        e = e || window.event;
        keyboardSupport.pressedKeys[e.keyCode] = true;
    },
    handleKeyUp: function (e) {
        e = e || window.event;
        delete keyboardSupport.pressedKeys[e.keyCode];
    },
    tick: function(){
        keyboardSupport.updateState();  
    },
    updateState: function () {
        // Prev State
        keyboardSupport.keyboardStatePrev.KEY_A = keyboardSupport.keyboardState.KEY_A;
        keyboardSupport.keyboardStatePrev.KEY_S = keyboardSupport.keyboardState.KEY_S;
        keyboardSupport.keyboardStatePrev.KEY_D = keyboardSupport.keyboardState.KEY_D;
        keyboardSupport.keyboardStatePrev.KEY_W = keyboardSupport.keyboardState.KEY_W;
        keyboardSupport.keyboardStatePrev.KEY_SPACE = keyboardSupport.keyboardState.KEY_SPACE;
        keyboardSupport.keyboardStatePrev.KEY_Q = keyboardSupport.keyboardState.KEY_Q;
        keyboardSupport.keyboardStatePrev.KEY_E = keyboardSupport.keyboardState.KEY_E;
        keyboardSupport.keyboardStatePrev.KEY_R = keyboardSupport.keyboardState.KEY_R;
        keyboardSupport.keyboardStatePrev.KEY_Z = keyboardSupport.keyboardState.KEY_Z;
        keyboardSupport.keyboardStatePrev.KEY_X = keyboardSupport.keyboardState.KEY_X;
        keyboardSupport.keyboardStatePrev.KEY_C = keyboardSupport.keyboardState.KEY_C;
        keyboardSupport.keyboardStatePrev.KEY_DOWN = keyboardSupport.keyboardState.KEY_DOWN;
        keyboardSupport.keyboardStatePrev.KEY_UP = keyboardSupport.keyboardState.KEY_UP;
        keyboardSupport.keyboardStatePrev.KEY_LEFT = keyboardSupport.keyboardState.KEY_LEFT;
        keyboardSupport.keyboardStatePrev.KEY_RIGHT = keyboardSupport.keyboardState.KEY_RIGHT;
        keyboardSupport.keyboardStatePrev.KEY_1 = keyboardSupport.keyboardState.KEY_1;
        keyboardSupport.keyboardStatePrev.KEY_2 = keyboardSupport.keyboardState.KEY_2;
        keyboardSupport.keyboardStatePrev.KEY_3 = keyboardSupport.keyboardState.KEY_3;
        keyboardSupport.keyboardStatePrev.KEY_4 = keyboardSupport.keyboardState.KEY_4;
        keyboardSupport.keyboardStatePrev.KEY_5 = keyboardSupport.keyboardState.KEY_5;
        keyboardSupport.keyboardStatePrev.KEY_6 = keyboardSupport.keyboardState.KEY_6;
        keyboardSupport.keyboardStatePrev.KEY_7 = keyboardSupport.keyboardState.KEY_7;
        keyboardSupport.keyboardStatePrev.KEY_8 = keyboardSupport.keyboardState.KEY_8;
        keyboardSupport.keyboardStatePrev.KEY_9 = keyboardSupport.keyboardState.KEY_9;
        keyboardSupport.keyboardStatePrev.KEY_0 = keyboardSupport.keyboardState.KEY_0;
        keyboardSupport.keyboardStatePrev.KEY_ENTER = keyboardSupport.keyboardState.KEY_ENTER;
        keyboardSupport.keyboardStatePrev.KEY_ESC = keyboardSupport.keyboardState.KEY_ESC;
        

        // Curr State
        keyboardSupport.keyboardState.KEY_A = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_A']] == true);
        keyboardSupport.keyboardState.KEY_S = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_S']] == true);
        keyboardSupport.keyboardState.KEY_D = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_D']] == true);
        keyboardSupport.keyboardState.KEY_W = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_W']] == true);
        keyboardSupport.keyboardState.KEY_SPACE = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_SPACE']] == true);
        keyboardSupport.keyboardState.KEY_Q = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_Q']] == true);
        keyboardSupport.keyboardState.KEY_E = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_E']] == true);
        keyboardSupport.keyboardState.KEY_R = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_R']] == true);
        keyboardSupport.keyboardState.KEY_Z = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_Z']] == true);
        keyboardSupport.keyboardState.KEY_X = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_X']] == true);
        keyboardSupport.keyboardState.KEY_C = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_C']] == true);
        keyboardSupport.keyboardState.KEY_DOWN = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_DOWN']] == true);
        keyboardSupport.keyboardState.KEY_UP = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_UP']] == true);
        keyboardSupport.keyboardState.KEY_LEFT = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_LEFT']] == true);
        keyboardSupport.keyboardState.KEY_RIGHT = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_RIGHT']] == true);
        keyboardSupport.keyboardState.KEY_1 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_1']] == true);
        keyboardSupport.keyboardState.KEY_2 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_2']] == true);
        keyboardSupport.keyboardState.KEY_3 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_3']] == true);
        keyboardSupport.keyboardState.KEY_4 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_4']] == true);
        keyboardSupport.keyboardState.KEY_5 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_5']] == true);
        keyboardSupport.keyboardState.KEY_6 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_6']] == true);
        keyboardSupport.keyboardState.KEY_7 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_7']] == true);
        keyboardSupport.keyboardState.KEY_8 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_8']] == true);
        keyboardSupport.keyboardState.KEY_9 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_9']] == true);
        keyboardSupport.keyboardState.KEY_0 = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_0']] == true);
        keyboardSupport.keyboardStatePrev.KEY_ENTER = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_ENTER']] == true);
        keyboardSupport.keyboardStatePrev.KEY_ESC = (keyboardSupport.pressedKeys[keyboardSupport.keyEnums['KEY_ESC']] == true);
    },
    keyboardState: {
        KEY_A: false,
        KEY_S: false,
        KEY_D: false,
        KEY_W: false,
        KEY_SPACE: false,
        KEY_Q: false,
        KEY_E: false,
        KEY_R: false,
        KEY_Z: false,
        KEY_X: false,
        KEY_C: false,
        KEY_DOWN: false,
        KEY_UP: false,
        KEY_LEFT: false,
        KEY_RIGHT: false,
        KEY_1: false,
        KEY_2: false,
        KEY_3: false,
        KEY_4: false,
        KEY_5: false,
        KEY_6: false,
        KEY_7: false,
        KEY_8: false,
        KEY_9: false,
        KEY_0: false,
        KEY_ENTER: false,
        KEY_ESC: false
    },
    keyboardStatePrev: {
        KEY_A: false,
        KEY_S: false,
        KEY_D: false,
        KEY_W: false,
        KEY_SPACE: false,
        KEY_Q: false,
        KEY_E: false,
        KEY_R: false,
        KEY_Z: false,
        KEY_X: false,
        KEY_C: false,
        KEY_DOWN: false,
        KEY_UP: false,
        KEY_LEFT: false,
        KEY_RIGHT: false,
        KEY_1: false,
        KEY_2: false,
        KEY_3: false,
        KEY_4: false,
        KEY_5: false,
        KEY_6: false,
        KEY_7: false,
        KEY_8: false,
        KEY_9: false,
        KEY_0: false,
        KEY_ENTER: false,
        KEY_ESC: false
    }
};