import { useRef, useEffect, useState } from 'react';

import { CanvasContext } from '../../hooks/useCanvas';
import useResponsiveSize from '../../hooks/useResponsiveSize';
import Wave from '../wave';

const Canvas = () => {
    const canvasRef = useRef(null);
    const { width, height } = useResponsiveSize();

    const [context, setContext] =
        useState();

    useEffect(() => {
        const ctx = canvasRef?.current?.getContext('2d');
        if (ctx) setContext(ctx);
    }, []);

    return (
        <>
            <CanvasContext.Provider value={{ context: context }}>
                <canvas
                    id="canvas"
                    ref={canvasRef}
                    width={width}
                    height={height}
                    style={{ zIndex: -1, position: "absolute", top: 0, left: 0 }}
                ></canvas>
                <Wave />
            </CanvasContext.Provider>
        </>
    );
};

export default Canvas;
