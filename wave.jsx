import { useCanvasContext } from '../../hooks/useCanvas';
import useResponsiveSize from '../../hooks/useResponsiveSize';
import { default as WaveObj } from '../lib/wave.js';

const Wave = () => {
    const { context } = useCanvasContext();
    const { width, height } = useResponsiveSize();
    let frequency = 0.013;
    const waves = {
        frontWave: new WaveObj([0.0211, 0.028, 0.015], '#025dff'),
        backWave: new WaveObj([0.0122, 0.018, 0.005], '#243cf0'),
    };

    const render = () => {
        context?.clearRect(0, 0, width, height);
        Object.entries(waves).forEach(([, wave]) => {
            wave.draw(context, width, height, frequency);
        });
        frequency += 0.013;
        requestAnimationFrame(render);
    };
    if (context) render();
    return null;
};

export default Wave;
