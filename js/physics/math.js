var irysius = irysius || {};

irysius.Math = {
    addV2: function (v1, v2) {
        if (!v1) v1 = { x: 0, y: 0 };
        if (!v2) v2 = { x: 0, y: 0 };
        return { x: v1.x + v2.x, y: v1.y + v2.y };
    },
    subV2: function (v1, v2) {
        if (!v1) v1 = { x: 0, y: 0 };
        if (!v2) v2 = { x: 0, y: 0 };
        return { x: v1.x - v2.x, y: v1.y - v2.y };
    },
    mulV2: function (v, s) {
        if (!v) v = { x: 0, y: 0 };
        return { x: v.x * s, y: v.y * s };
    },
    negV2: function (v) {
        if (!v) v = { x: 0, y: 0 };
        return { x: v.x * -1, y: v.y * -1 };
    },
    dotV2: function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    },
    matrixProjectV2: function (v, axis) {
        var k = (v.x * axis.x + v.y * axis.y) / (axis.x * axis.x + axis.y * axis.y);
        return { x: k * axis.x, y: k * axis.y };
    },
    matrixProjectV2AsDot: function (v, axis) {
        var projection = this.matrixProjectV2(v, axis);
        return this.dotV2(projection, axis);
    },
    wrapDegrees: function (d) {
        var a = d % 360;
        if (a < -180) a += 360;
        if (a > 180) a -= 360;
        return a;
    },
    toRadians: function (a) {
        return a / 180 * Math.PI;
    },
    toAngle: function (r) {
        return r / Math.PI * 180;
    },
    rotatePt: function (porigin, ptarget, radians) {
        var vdelta = this.subV2(ptarget, porigin);
        var _x = Math.cos(radians) * vdelta.x - Math.sin(radians) * vdelta.y;
        var _y = Math.sin(radians) * vdelta.x + Math.cos(radians) * vdelta.y;
        return this.addV2({ x: _x, y: _y }, porigin);
    }
}