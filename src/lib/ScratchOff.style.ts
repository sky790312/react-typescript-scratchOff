import styled from 'styled-components';

export const ScratchOffContainer = styled.div<{ width: number; height: number }>`
  position: relative;
  margin: 0 auto;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
`;

export const ResultContainer = styled.div<{ isCoverImageReady: boolean }>`
  visibility: ${props => (props.isCoverImageReady ? 'visible' : 'hidden')};
  width: 100%;
  height: 100%;
  overflow: hidden;
  word-break: break-all;
`;

export const CoverImg = styled.img`
  display: none;
`;
