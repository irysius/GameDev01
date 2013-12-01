var irysius = irysius || {};

// These shapes are tied to createjs.
irysius.Circle = function (x, y, radius) {
    var _x = 0, _y = 0, _radius = 0;

    if (x) _x = x;
    if (y) _y = y;
    if (radius) _radius = radius;

    var _center = { x: _x, y: _y };
    var _topLeft = { x: _x - _radius, y: _y - _radius };

    return {
        getCenter: function () { return _center; },
        getTop: function () { return _topLeft.y; },
        getBottom: function () { return _center.y + _radius; },
        getLeft: function () { return _topLeft.x; },
        getRight: function () { return _center.x + _radius; },
        getAABB: function () { return new irysius.Rectangle(_topLeft.x, _topLeft.y, _radius * 2, _radius * 2) },
        getType: function () {
            return "circle";
        }
    };
}

irysius.Rectangle = function (x, y, width, height) {
    var _x = 0, _y = 0, _width = 0, _height = 0;

    if (x) _x = x;
    if (y) _y = y;
    if (width) _width = width;
    if (height) _height = height;

    var _topLeft = { x: _x, y: _y };
    var _topRight = irysius.Math.addV2(_topLeft, { x: _width, y: 0 });
    var _bottomLeft = irysius.Math.addV2(_topLeft, { x: 0, y: _height });
    var _bottomRight = irysius.Math.addV2(_topLeft, { x: _width, y: _height });

    return {
        getTopLeft: function () { return _topLeft; },
        getTopRight: function () { return _topRight; },
        getBottomLeft: function () { return _bottomLeft; },
        getBottomRight: function () { return _bottomRight; },
        getAABB: function () { return irysius.Rectangle(_x, _y, _width, _height); },
        getType: function () {
            return "rectangle";
        }
    }
}

irysius.RotRect = function (x, y, width, height, regX, regY, rotation) {
    var _x = 0, _y = 0, _width = 0, _height = 0, _regX = 0, _regY = 0, _rotation = 0;

    if (x) _x = x;
    if (y) _y = y;
    if (width) _width = width;
    if (height) _height = height;
    if (regX) _regX = regX;
    if (regY) _regY = regY;
    if (rotation) _rotation = irysius.Math.toRadians(irysius.Math.wrapDegrees(rotation));

    var _topLeft = { x: _x, y: _y };
    var _topRight = irysius.Math.addV2(_topLeft, { x: _width, y: 0 });
    var _bottomLeft = irysius.Math.addV2(_topLeft, { x: 0, y: _height });
    var _bottomRight = irysius.Math.addV2(_topLeft, { x: _width, y: _height });
    var _center = irysius.Math.addV2(_topLeft, { x: _regX, y: _regY });

    return {
        getTopLeft: function () {
            if (_rotation == 0) return _topLeft;
            return irysius.Math.rotatePt(_center, _topLeft, _rotation);
        },
        getTopRight: function () {
            if (_rotation == 0) return irysius.Math.addV2(this.getTopLeft(), { x: _width, y: 0 });
            return irysius.Math.rotatePt(_center, _topRight, _rotation);
        },
        getBottomLeft: function () {
            if (_rotation == 0) return irysius.Math.addV2(this.getTopLeft(), { x: 0, y: _height });
            return irysius.Math.rotatePt(_center, _bottomLeft, _rotation);
        },
        getBottomRight: function () {
            if (_rotation == 0) return irysius.Math.addV2(this.getTopLeft(), { x: _width, y: _height });
            return irysius.Math.rotatePt(_center, _bottomRight, _rotation);
        },
        getAABB: function () {
            var tl = this.getTopLeft();
            var tr = this.getTopRight();
            var bl = this.getBottomLeft();
            var br = this.getBottomRight();
            var minX = tl.x, minY = tl.y, maxX = tl.x, maxY = tl.y;

            if (tr.x < minX) minX = tr.x; if (tr.x > maxX) maxX = tr.x;
            if (tr.y < minY) minY = tr.y; if (tr.y > maxX) maxY = tr.y;

            if (bl.x < minX) minX = bl.x; if (bl.x > maxX) maxX = bl.x;
            if (bl.y < minY) minY = bl.y; if (bl.y > maxX) maxY = bl.y;

            if (br.x < minX) minX = br.x; if (br.x > maxX) maxX = br.x;
            if (br.y < minY) minY = br.y; if (br.y > maxX) maxY = br.y;

            return new irysius.Rectangle(minX, minY, maxX - minX, maxY - minY);
        },
        getType: function () {
            return "rotrect";
        }
    }
}

