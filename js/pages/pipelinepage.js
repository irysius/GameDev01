var pipelinepage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    draw: function () {
        pipelinepage.drawBase();
        if (!pipelinepage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in pipelinepage.assetNames) {
            if (pipelinepage.isVisible) {
                stage.getChildByName(pipelinepage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(pipelinepage.assetNames[an]).alpha = 0;
            }
        }
    }
};