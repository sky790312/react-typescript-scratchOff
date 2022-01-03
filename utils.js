export const getFilledInPixels = (stride, ctx, canvasWidth, canvasHeight) => {
    var _a, _b;
    const newStride = !stride || stride < 1 ? 1 : stride;
    const pixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const pdata = (_a = pixels === null || pixels === void 0 ? void 0 : pixels.data) !== null && _a !== void 0 ? _a : [];
    const l = (_b = pdata === null || pdata === void 0 ? void 0 : pdata.length) !== null && _b !== void 0 ? _b : 0;
    const total = l / newStride;
    let count = 0;
    for (let i = 0; i < l; i += newStride) {
        if (+pdata[i] === 0) {
            count++;
        }
    }
    return Math.round((count / total) * 100);
};
export const getMouse = (e, canvas) => {
    let offsetX = 0;
    let offsetY = 0;
    let mx = 0;
    let my = 0;
    if (canvas.offsetParent) {
        // eslint-disable-next-line no-cond-assign, no-param-reassign
        while ((canvas = canvas.offsetParent)) {
            offsetX += canvas.offsetLeft;
            offsetY += canvas.offsetTop;
        }
    }
    if (isMouseEvent(e)) {
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
    }
    if (isTouchEvent(e)) {
        mx = e.touches[0].clientX - offsetX;
        my = e.touches[0].clientY - offsetY;
    }
    return { x: mx, y: my };
};
export const getDistanceBetween = (point1, point2) => Math.sqrt(
// eslint-disable-next-line no-restricted-properties
Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
export const getAngleBetween = (point1, point2) => Math.atan2(point2.x - point1.x, point2.y - point1.y);
export const isTouchEvent = (e) => e && 'touches' in e;
export const isMouseEvent = (e) => e && 'screenX' in e;
export const simpleStringify = (object) => {
    const simpleObject = {};
    for (const prop in object) {
        if (!object.hasOwnProperty(prop)) {
            continue;
        }
        if (typeof object[prop] === 'object') {
            continue;
        }
        if (typeof object[prop] === 'function') {
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};
//# sourceMappingURL=utils.js.map