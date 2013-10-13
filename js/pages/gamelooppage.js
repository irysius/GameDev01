var gamelooppage = {
    isVisible: true,
    isEnabled: true,
    manifest: [],
    assetNames:[],
    draw: function () {
        gamelooppage.drawBase();
        if (!gamelooppage.isVisible) {
            return;
        }
    },
    drawBase: function () {
        for (an in gamelooppage.assetNames) {
            if (gamelooppage.isVisible) {
                stage.getChildByName(gamelooppage.assetNames[an]).alpha = 1;
            } else {
                stage.getChildByName(gamelooppage.assetNames[an]).alpha = 0;
            }
        }
       
    }
};