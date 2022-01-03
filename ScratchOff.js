import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, memo } from 'react';
import * as S from './ScratchOff.style';
import { getAngleBetween, getDistanceBetween, getFilledInPixels, getMouse, simpleStringify, } from './utils';
import { DEFAULT_REVEAL_PERCENTAGE, BRUSH_IMG } from './constants';
const ScratchOff = ({ revealPercentage = DEFAULT_REVEAL_PERCENTAGE, width, height, coverImgSrc, children, handleReveal, }) => {
    const coverImgRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCoverImageReady, setIsCoverImageReady] = useState(false);
    useEffect(() => {
        coverImgRef.current.src = coverImgSrc;
        coverImgRef.current.onload = () => {
            setIsCoverImageReady(true);
        };
    }, [coverImgSrc]);
    useEffect(() => {
        if (!isCoverImageReady) {
            return;
        }
        let isDrawing;
        let lastPoint;
        const canvas = canvasRef.current;
        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
        const brush = new Image();
        brush.src = BRUSH_IMG;
        ctx.drawImage(coverImgRef.current, 0, 0, width, height);
        const handleMouseDown = (e) => {
            isDrawing = true;
            lastPoint = getMouse(e, canvas);
        };
        const handleMouseMove = (e) => {
            if (!isDrawing) {
                return;
            }
            e.preventDefault();
            const currentPoint = getMouse(e, canvas);
            const dist = getDistanceBetween(lastPoint, currentPoint);
            const angle = getAngleBetween(lastPoint, currentPoint);
            let x;
            let y;
            for (let i = 0; i < dist; i += 1) {
                x = lastPoint.x + Math.sin(angle) * i - 25;
                y = lastPoint.y + Math.cos(angle) * i - 25;
                ctx.globalCompositeOperation = 'destination-out';
                ctx.drawImage(brush, x, y);
            }
            lastPoint = currentPoint;
            const currentPercentage = getFilledInPixels(32, ctx, width, height);
            if (currentPercentage > revealPercentage && (canvas === null || canvas === void 0 ? void 0 : canvas.parentNode)) {
                handleReveal();
                canvas === null || canvas === void 0 ? void 0 : canvas.parentNode.removeChild(canvas);
            }
        };
        const handleMouseUp = () => {
            isDrawing = false;
        };
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mousedown', handleMouseDown, false);
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('touchstart', handleMouseDown, false);
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mousemove', handleMouseMove, false);
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('touchmove', handleMouseMove, false);
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseup', handleMouseUp, false);
        canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('touchend', handleMouseUp, false);
        return () => {
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('mousedown', handleMouseDown, false);
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('touchstart', handleMouseDown, false);
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('mousemove', handleMouseMove, false);
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('touchmove', handleMouseMove, false);
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('mouseup', handleMouseUp, false);
            canvas === null || canvas === void 0 ? void 0 : canvas.removeEventListener('touchend', handleMouseUp, false);
        };
    }, [handleReveal, revealPercentage, height, width, isCoverImageReady]);
    return (_jsxs(S.ScratchOffContainer, Object.assign({ width: width, height: height }, { children: [_jsx(S.Canvas, { ref: canvasRef, width: width, height: height }, void 0), _jsx(S.ResultContainer, Object.assign({ isCoverImageReady: isCoverImageReady }, { children: children }), void 0), _jsx(S.CoverImg, { alt: "", ref: coverImgRef, crossOrigin: "anonymous" }, void 0)] }), void 0));
};
const comparisonFn = (prevProps, nextProps) => {
    if (typeof (prevProps === null || prevProps === void 0 ? void 0 : prevProps.children) === 'object') {
        const prevJSONProps = simpleStringify(prevProps === null || prevProps === void 0 ? void 0 : prevProps.children.props.children);
        const nextJSONProps = simpleStringify(nextProps === null || nextProps === void 0 ? void 0 : nextProps.children.props.children);
        return prevJSONProps === nextJSONProps;
    }
    return (prevProps === null || prevProps === void 0 ? void 0 : prevProps.children) === (nextProps === null || nextProps === void 0 ? void 0 : nextProps.children);
};
export default memo(ScratchOff, comparisonFn);
//# sourceMappingURL=ScratchOff.js.map