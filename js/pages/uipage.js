var uipage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    draw: function () {
        uipage.drawBase();
        if (!uipage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in uipage.assetNames) {
            if (uipage.isVisible) {
                stage.getChildByName(uipage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(uipage.assetNames[an]).alpha = 0;
            }
        }
    }
};