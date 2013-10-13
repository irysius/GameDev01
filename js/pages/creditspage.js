var creditspage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    draw: function () {
        creditspage.drawBase();
        if (!creditspage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in creditspage.assetNames) {
            if (creditspage.isVisible) {
                stage.getChildByName(creditspage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(creditspage.assetNames[an]).alpha = 0;
            }
        }
       
    }
};