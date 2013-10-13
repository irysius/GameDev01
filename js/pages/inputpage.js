var inputpage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    draw: function () {
        inputpage.drawBase();
        if (!inputpage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in inputpage.assetNames) {
            if (inputpage.isVisible) {
                stage.getChildByName(inputpage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(inputpage.assetNames[an]).alpha = 0;
            }
        }
       
    }
};