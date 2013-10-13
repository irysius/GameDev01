var renderingpage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    draw: function () {
        renderingpage.drawBase();
        if (!renderingpage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in renderingpage.assetNames) {
            if (renderingpage.isVisible) {
                stage.getChildByName(renderingpage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(renderingpage.assetNames[an]).alpha = 0;
            }
        }
       
    }
};