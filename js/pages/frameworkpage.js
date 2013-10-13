var frameworkpage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    draw: function () {
        frameworkpage.drawBase();
        if (!frameworkpage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in frameworkpage.assetNames) {
            if (frameworkpage.isVisible) {
                stage.getChildByName(frameworkpage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(frameworkpage.assetNames[an]).alpha = 0;
            }
        }
       
    }
};