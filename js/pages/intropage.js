var intropage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    update: function(elapsedTime) {
        if (!intropage.isVisible || !intropage.isEnabled) {
            return;
        }
    },
    draw: function () {
        intropage.drawBase();
        if (!intropage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in intropage.assetNames) {
            if (intropage.isVisible) {
                stage.getChildByName(intropage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(intropage.assetNames[an]).alpha = 0;
            }
        }
       
    }
};