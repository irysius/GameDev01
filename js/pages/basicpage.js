var basicpage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    prepareAssets: function(){
        // this will be called by the game engine, so add loaded assets to the stage.

    },
    update: function(elapsedTime){
        if (!basicpage.isVisible || !basicpage.isEnabled) {
            return;
        }

        // place all your update code here, including inputs
    },
    draw: function () {
        basicpage.drawBase();
        if (!basicpage.isVisible) {
            return;
        }

        // place all your resize sensitive drawing manipulation here

    },
    drawBase: function () {
        for (an in basicpage.assetNames) {
            if (basicpage.isVisible) {
                stage.getChildByName(basicpage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(basicpage.assetNames[an]).alpha = 0;
            }
        }
       
    }
};