import { useEffect, useRef, useState } from "react";

export default function BocadoLoader({ onComplete }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let currentPath = 0;
    let t1 = 0;
    let speed = 0.6;
    let finish = false;

    // Letter paths for BOCADO
    const letterMap = {
      b: {
        path: [
          [0, 38, 0, 38, 5, 38, 5, 38],
          [5, 38, 5, 38, 5, 2.209, 5, 2.209],
          [5, 2.209, 5, 2.209, 18.428, 2.209, 18.428, 2.209],
          [18.428, 2.209, 21.146, 2.208, 23.354, 2.562, 25.007, 3.296],
          [25.007, 3.296, 26.688, 4, 27.969, 5.094, 28.888, 6.641],
          [28.888, 6.641, 29.844, 8.125, 29.878, 14.313, 29.048, 15.686],
          [29.048, 15.686, 28.224, 17.029, 26.965, 18.124, 25.289, 18.957],
          [25.289, 18.957, 27.441, 19.588, 29.112, 20.676, 30.281, 22.204],
          [30.281, 22.204, 31.441, 23.724, 32.029, 25.535, 32.027, 27.624],
          [32.027, 27.624, 32.024, 29.294, 31.671, 30.853, 30.964, 32.3],
          [30.964, 32.3, 30.247, 33.735, 29.382, 34.847, 28.339, 35.632],
          [28.339, 35.632, 27.306, 36.412, 26, 37, 24.421, 37.402],
          [24.421, 37.402, 22.853, 37.794, 20.929, 38, 18.647, 38],
        ],
        width: 40,
      },
      o: {
        path: [
          [0, 38, 0, 38, 19.114, 38, 19.114, 38],
          [19.114, 38, 18.75, 37.973, 15.725, 37.8, 13.081, 36.169],
          [13.081, 36.169, 10.424, 34.537, 8.417, 32.31, 7.051, 29.504],
          [7.051, 29.504, 5.667, 26.667, 5.021, 23.688, 5, 20.568],
          [5, 20.568, 5.021, 14.625, 6.563, 9.979, 9.785, 6.616],
          [9.785, 6.616, 12.958, 3.229, 17.062, 1.562, 22.139, 1.575],
          [22.139, 1.575, 25.438, 1.562, 28.417, 2.333, 31.074, 3.943],
          [31.074, 3.943, 33.729, 5.479, 35.75, 7.687, 37.143, 10.547],
          [37.143, 10.547, 38.583, 13.354, 39.229, 16.563, 39.229, 20.153],
          [39.229, 20.153, 39.208, 23.771, 38.479, 26.979, 37.031, 29.895],
          [37.031, 29.895, 35.563, 32.729, 33.521, 34.917, 30.806, 36.401],
          [30.806, 36.401, 28.104, 37.875, 25.229, 37.979, 24.114, 38],
        ],
        width: 44.229,
      },
      c: {
        path: [
          [0, 38, 0, 38, 19.821, 38, 19.821, 38],
          [19.821, 38, 17.938, 37.982, 14.824, 37.812, 12.41, 36.255],
          [12.41, 36.255, 9.994, 34.682, 8.153, 32.406, 6.892, 29.431],
          [6.892, 29.431, 5.635, 26.447, 4.994, 23.253, 5, 19.835],
          [5, 19.835, 5, 16.112, 5.718, 12.859, 7.136, 10.083],
          [7.136, 10.083, 8.553, 7.288, 10.582, 5.194, 13.215, 3.76],
          [13.215, 3.76, 15.835, 2.324, 18.729, 1.594, 21.895, 1.599],
          [21.895, 1.599, 25.471, 1.594, 28.494, 2.512, 30.928, 4.333],
          [30.928, 4.333, 33.371, 6.159, 35.071, 8.706, 36.031, 12.024],
          [36.031, 12.024, 36.031, 12.024, 31.367, 13.123, 31.367, 13.123],
          [31.367, 13.123, 30.535, 10.512, 29.335, 8.618, 27.754, 7.434],
          [27.754, 7.434, 26.171, 6.241, 24.188, 5.641, 21.797, 5.652],
          [21.797, 5.652, 19.053, 5.647, 16.747, 6.306, 14.9, 7.629],
          [14.9, 7.629, 13.053, 8.947, 11.747, 10.712, 11.006, 12.939],
          [11.006, 12.939, 10.265, 15.153, 9.882, 17.453, 9.883, 19.812],
          [9.883, 19.812, 9.876, 22.853, 10.318, 25.505, 11.213, 27.783],
          [11.213, 27.783, 12.1, 30.054, 13.488, 31.729, 15.352, 32.873],
          [15.352, 32.873, 17.212, 33.994, 19.247, 34.547, 21.431, 34.558],
          [21.431, 34.558, 24.082, 34.553, 26.329, 33.794, 28.169, 32.263],
          [28.169, 32.263, 30, 30.729, 31.247, 28.459, 31.904, 25.451],
          [31.904, 25.451, 31.904, 25.451, 36.641, 26.647, 36.641, 26.647],
          [36.641, 26.647, 35.639, 30.522, 33.851, 33.502, 31.281, 35.547],
          [31.281, 35.547, 28.698, 37.565, 25.545, 38, 23.821, 38],
        ],
        width: 41.641,
      },
      a: {
        path: [
          [0, 38, 0, 38, 5, 38, 5, 38],
          [5, 38, 5, 38, 18.746, 2.209, 18.746, 2.209],
          [18.746, 2.209, 18.746, 2.209, 23.848, 2.209, 23.848, 2.209],
          [23.848, 2.209, 23.848, 2.209, 38.497, 38, 38.497, 38],
          [38.497, 38, 38.497, 38, 43.497, 38, 43.497, 38],
        ],
        width: 43.497,
      },
      d: {
        path: [
          [0, 38, 0, 38, 5, 38, 5, 38],
          [5, 38, 5, 38, 5, 2.209, 5, 2.209],
          [5, 2.209, 5, 2.209, 17.329, 2.209, 17.329, 2.209],
          [17.329, 2.209, 20.104, 2.188, 22.236, 2.375, 23.701, 2.722],
          [23.701, 2.722, 25.75, 3.167, 27.5, 4.021, 28.951, 5.286],
          [28.951, 5.286, 30.833, 6.854, 32.292, 8.896, 33.186, 11.401],
          [33.186, 11.401, 34.104, 13.875, 34.583, 16.708, 34.59, 19.909],
          [34.59, 19.909, 34.604, 22.604, 34.271, 25.021, 33.639, 27.136],
          [33.639, 27.136, 32.979, 29.229, 32.188, 30.958, 31.197, 32.349],
          [31.197, 32.349, 30.208, 33.708, 29.125, 34.792, 27.938, 35.596],
          [27.938, 35.596, 26.354, 36.646, 24.958, 37.021, 23.664, 37.39],
          [23.664, 37.39, 22.354, 37.729, 20.396, 38.137, 17.915, 38],
        ],
        width: 39.59,
      },
      " ": {
        path: [[0, 38, 0, 38, 30, 38, 30, 38]],
        width: 30,
      },
    };

    const text = "bocado";

    function resize() {
      const box = canvas.getBoundingClientRect();
      canvas.width = box.width;
      canvas.height = box.height;
    }

    function getStartingX(str) {
      let width = 0;
      for (let i = 0; i < str.length; i++) {
        width += letterMap[str[i]].width;
      }
      return canvas.width / 2 - width / 2;
    }

    function calculateNewX(array, x, y) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        newArray.push(i % 2 ? array[i] + y : array[i] + x);
      }
      newArray.push(false);
      return newArray;
    }

    function calculateNewPath(array, x, y) {
      return array.map((item) => calculateNewX(item, x, y));
    }

    function getFirstLine(str) {
      const height = 38;
      const startX = getStartingX(str);
      return [
        0,
        canvas.height / 2 + height,
        0,
        canvas.height / 2 + height,
        startX,
        canvas.height / 2 + height,
        startX,
        canvas.height / 2 + height,
        false,
      ];
    }

    function getLastLine(str) {
      const height = 38;
      let width = 0;
      for (let i = 0; i < str.length; i++) {
        width += letterMap[str[i]].width;
      }
      const x = canvas.width / 2 + width / 2;
      return [
        x,
        canvas.height / 2 + height,
        x,
        canvas.height / 2 + height,
        canvas.width,
        canvas.height / 2 + height,
        canvas.width,
        canvas.height / 2 + height,
        false,
      ];
    }

    function makePath(str) {
      let x = getStartingX(str);
      const y = canvas.height / 2;
      let path = [];

      // Add line from left edge to text start
      path.push(getFirstLine(str));

      for (let i = 0; i < str.length; i++) {
        const newPath = calculateNewPath(letterMap[str[i]].path, x, y);
        path = path.concat(newPath);
        x += letterMap[str[i]].width;
      }

      // Add line from text end to right edge
      path.push(getLastLine(str));

      return path;
    }

    function percente(x1, y1, bx1, by1, bx2, by2, x2, y2, t0, t1) {
      const u0 = 1 - t0;
      const u1 = 1 - t1;
      const qxa = x1 * u0 * u0 + bx1 * 2 * t0 * u0 + bx2 * t0 * t0;
      const qxb = x1 * u1 * u1 + bx1 * 2 * t1 * u1 + bx2 * t1 * t1;
      const qxc = bx1 * u0 * u0 + bx2 * 2 * t0 * u0 + x2 * t0 * t0;
      const qxd = bx1 * u1 * u1 + bx2 * 2 * t1 * u1 + x2 * t1 * t1;
      const qya = y1 * u0 * u0 + by1 * 2 * t0 * u0 + by2 * t0 * t0;
      const qyb = y1 * u1 * u1 + by1 * 2 * t1 * u1 + by2 * t1 * t1;
      const qyc = by1 * u0 * u0 + by2 * 2 * t0 * u0 + y2 * t0 * t0;
      const qyd = by1 * u1 * u1 + by2 * 2 * t1 * u1 + y2 * t1 * t1;
      const xa = qxa * u0 + qxc * t0;
      const xb = qxa * u1 + qxc * t1;
      const xc = qxb * u0 + qxd * t0;
      const xd = qxb * u1 + qxd * t1;
      const ya = qya * u0 + qyc * t0;
      const yb = qya * u1 + qyc * t1;
      const yc = qyb * u0 + qyd * t0;
      const yd = qyb * u1 + qyd * t1;
      return [xa, ya, xb, yb, xc, yc, xd, yd];
    }

    function drawCurve(x1, y1, bx1, by1, bx2, by2, x2, y2) {
      ctx.lineTo(x1, y1);
      ctx.bezierCurveTo(bx1, by1, bx2, by2, x2, y2);
    }

    function drawPath() {
      ctx.beginPath();
      for (let i = 0; i < path.length; i++) {
        if (i === currentPath) {
          path[i][8] = path[i][8] >= 1 ? true : path[i][8];
          currentPath = path[i][8] >= 1 ? currentPath + 1 : currentPath;
          t1 = path[i][8] >= 1 ? 0 : t1;
          t1 = path[i][8];
          const v = percente(
            path[i][0],
            path[i][1],
            path[i][2],
            path[i][3],
            path[i][4],
            path[i][5],
            path[i][6],
            path[i][7],
            0,
            t1
          );
          drawCurve(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7]);
          path[i][8] += speed;
        } else if (path[i][8]) {
          drawCurve(
            path[i][0],
            path[i][1],
            path[i][2],
            path[i][3],
            path[i][4],
            path[i][5],
            path[i][6],
            path[i][7]
          );
        }
      }
      ctx.lineWidth = 3;
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#FEAA3F";
      ctx.shadowColor = "rgba(254, 170, 63, 0.6)";
      ctx.shadowBlur = 15;
      ctx.stroke();
    }

    function drawBackground() {
      // Simple solid color - minimal and clean
      ctx.fillStyle = "#0f2a23";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function isFinish() {
      if (path[path.length - 1][path[path.length - 1].length - 1] >= 1 && !finish) {
        finish = true;
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
        }, 100);
      }
    }

    function reDraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      drawPath();
      isFinish();
      animationRef.current = requestAnimationFrame(reDraw);
    }

    resize();
    const path = makePath(text);

    const handleResize = () => {
      resize();
    };

    window.addEventListener("resize", handleResize);
    reDraw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ zIndex: 9999 }}
    />
  );
}
