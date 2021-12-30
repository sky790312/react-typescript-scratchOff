import React, { useEffect, useRef, useState, memo } from 'react';
import * as S from './ScratchOff.style'
import {
  getAngleBetween,
  getDistanceBetween,
  getFilledInPixels,
  getMouse,
  simpleStringify,
} from './utils';
import { DEFAULT_REVEAL_PERCENTAGE, BRUSH_IMG } from './constants'

interface Props {
  revealPercentage?: number;
  width: number;
  height: number;
  coverImgSrc: string;
  children: string | React.ReactNode;
  handleReveal: () => void;
}

const ScratchOff: React.FC<Props> = ({
  revealPercentage = DEFAULT_REVEAL_PERCENTAGE,
  width,
  height,
  coverImgSrc,
  children,
  handleReveal,
}) => {
  const coverImgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCoverImageReady, setIsCoverImageReady] = useState<boolean>(false);

  useEffect(() => {
    coverImgRef.current!.src = coverImgSrc;
    coverImgRef.current!.onload = () => {
      setIsCoverImageReady(true);
    };
  }, [coverImgSrc]);

  useEffect(() => {
    if (!isCoverImageReady) {
      return;
    }

    let isDrawing: boolean;
    let lastPoint: { x: number; y: number };
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const brush = new Image();

    brush.src = BRUSH_IMG;
    ctx!.drawImage(coverImgRef.current!, 0, 0, width, height);

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      lastPoint = getMouse(e, canvas);
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
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
        ctx!.globalCompositeOperation = 'destination-out';
        ctx!.drawImage(brush, x, y);
      }

      lastPoint = currentPoint;
      const currentPercentage = getFilledInPixels(32, ctx!, width, height);

      if (currentPercentage > revealPercentage && canvas?.parentNode) {
        handleReveal();
        canvas?.parentNode.removeChild(canvas);
      }
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    canvas?.addEventListener('mousedown', handleMouseDown, false);
    canvas?.addEventListener('touchstart', handleMouseDown, false);
    canvas?.addEventListener('mousemove', handleMouseMove, false);
    canvas?.addEventListener('touchmove', handleMouseMove, false);
    canvas?.addEventListener('mouseup', handleMouseUp, false);
    canvas?.addEventListener('touchend', handleMouseUp, false);

    return () => {
      canvas?.removeEventListener('mousedown', handleMouseDown, false);
      canvas?.removeEventListener('touchstart', handleMouseDown, false);
      canvas?.removeEventListener('mousemove', handleMouseMove, false);
      canvas?.removeEventListener('touchmove', handleMouseMove, false);
      canvas?.removeEventListener('mouseup', handleMouseUp, false);
      canvas?.removeEventListener('touchend', handleMouseUp, false);
    };
  }, [handleReveal, revealPercentage, height, width, isCoverImageReady]);

  return (
    <S.ScratchOffContainer width={width} height={height}>
      <S.Canvas ref={canvasRef} width={width} height={height} />
      <S.ResultContainer isCoverImageReady={isCoverImageReady}>
        {children}
      </S.ResultContainer>
      <S.CoverImg alt="" ref={coverImgRef} crossOrigin="anonymous" />
    </S.ScratchOffContainer>
  );
};



const comparisonFn = (prevProps: any, nextProps: any) => {
  if (typeof prevProps?.children === 'object') {
    const prevJSONProps = simpleStringify(prevProps?.children.props.children);
    const nextJSONProps = simpleStringify(nextProps?.children.props.children);

    return prevJSONProps === nextJSONProps;
  }

  return prevProps?.children === nextProps?.children;
};

export default memo(ScratchOff, comparisonFn);
