import { useRef, useEffect } from "react";
import styles from "../styles/Wave.module.css";

function Wave() {
    const canvas = useRef(); // Creating reference to the canvas showing the waves
    useEffect(
        function () {
            if (canvas) {
                const ctx = canvas.current.getContext("2d");
                const HEIGHT = canvas.current.height,
                    WIDTH = canvas.current.width;
                const waves = [
                    {
                        x: Math.floor(Math.random() * 1000), // x-offset
                        dx: 1, // x speed
                        y: 1, // height
                        color: "rgba(240, 240, 240,0.4)", // color
                    },
                    {
                        x: Math.floor(Math.random() * 1000), // x-offset
                        dx: 0.5, // x speed
                        y: 1, // height
                        color: "rgba(240, 240, 240,0.8)", // color
                    },
                    {
                        x: Math.floor(Math.random() * 1000), // x-offset
                        dx: 0.2, // x speed
                        y: 1, // height
                        color: "rgba(240, 240, 240, 1)", // color
                    },
                ];
                const drawWave = (ctx, xo, yo, fs) => {
                    let x = 0, // initial x position
                        y = 0, // initial x position
                        a = 30, // amplitude
                        f = 80; // frequency
                    const scroll = window.scrollY; // Amount of scroll on the page
                    ctx.beginPath(); // begin drawing on canvas
                    ctx.lineWidth = 1; // set line width
                    ctx.fillStyle = fs; // set fillstyle
                    while (x < WIDTH + 10) {
                        // draw the full width of the canvas
                        y =
                            HEIGHT -
                            50 -
                            (yo + scroll * 0.6) * 2 +
                            a * Math.sin((x + xo) / f);
                        ctx.lineTo(x, y); // Drawing a line to the next point on the wave
                        x += 1; // incrementing x-value
                    }
                    ctx.lineTo(x, HEIGHT);
                    ctx.lineTo(0, HEIGHT);
                    ctx.fill();
                };
                const draw = () => {
                    ctx.clearRect(0, 0, WIDTH, HEIGHT);
                    for (let l = waves.length - 1, i = l; i >= 0; i--) {
                        const wave = waves[i];
                        drawWave(ctx, wave.x, wave.y, wave.color);
                        wave.x += wave.dx;
                    }
                    window.requestAnimationFrame(draw);
                };
                window.requestAnimationFrame(draw);
            }
        },
        [canvas]
    );
    return (
        <canvas
            ref={canvas}
            width={900}
            height={900}
            className={styles.wave}
        ></canvas>
    );
}

export default Wave;
