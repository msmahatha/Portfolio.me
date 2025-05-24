
"use client"; // Add "use client" for Next.js App Router client components

import { useRef, useEffect, type CSSProperties, type FC } from "react";
import './Waves.css';

// Helper classes for Perlin Noise generation
class Grad {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x; this.y = y; this.z = z;
  }
  dot2(x: number, y: number): number { return this.x * x + this.y * y; }
}

class Noise {
  grad3: Grad[];
  p: number[];
  perm: number[];
  gradP: Grad[];

  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
      new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
      new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)
    ];
    // prettier-ignore
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
    ];
    this.perm = new Array(512);
    this.gradP = new Array(512);
    this.seed(seed);
  }

  seed(seed: number): void {
    if (seed > 0 && seed < 1) seed *= 65536;
    seed = Math.floor(seed);
    if (seed < 256) seed |= seed << 8;
    for (let i = 0; i < 256; i++) {
      let v: number;
      const pi = this.p[i]!;
      if (i & 1) {
        v = pi ^ (seed & 255);
      } else {
        v = pi ^ ((seed >> 8) & 255);
      }
      this.perm[i] = this.perm[i + 256] = v;
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12]!;
    }
  }

  fade(t: number): number { return t * t * t * (t * (t * 6 - 15) + 10); }
  lerp(a: number, b: number, t: number): number { return (1 - t) * a + t * b; }

  perlin2(x: number, y: number): number {
    let X = Math.floor(x), Y = Math.floor(y);
    x -= X; y -= Y;
    X &= 255; Y &= 255;

    const gi00 = this.gradP[X + this.perm[Y]!]!;
    const gi01 = this.gradP[X + this.perm[Y + 1]!]!;
    const gi10 = this.gradP[X + 1 + this.perm[Y]!]!;
    const gi11 = this.gradP[X + 1 + this.perm[Y + 1]!]!;

    const n00 = gi00.dot2(x, y);
    const n01 = gi01.dot2(x, y - 1);
    const n10 = gi10.dot2(x - 1, y);
    const n11 = gi11.dot2(x - 1, y - 1);

    const u = this.fade(x);
    return this.lerp(
      this.lerp(n00, n10, u),
      this.lerp(n01, n11, u),
      this.fade(y)
    );
  }
}

interface Point {
  x: number;
  y: number;
  wave: { x: number; y: number };
  cursor: { x: number; y: number; vx: number; vy: number };
}

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  style?: CSSProperties;
  className?: string;
}

const Waves: FC<WavesProps> = ({
  lineColor = "black", // Default, will be overridden by AppLayout
  backgroundColor = "transparent", // Default, will be overridden by AppLayout
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  style = {},
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 });
  const noiseRef = useRef(new Noise(Math.random()));
  const linesRef = useRef<Point[][]>([]);
  const mouseRef = useRef({
    x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false
  });
  
  // Use a separate ref for config to avoid re-running the main effect on prop change
  // The animation loop will pick up the latest values from this ref.
  const configRef = useRef({
    lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY,
    friction, tension, maxCursorMove, xGap, yGap
  });

  useEffect(() => {
    configRef.current = { lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap };
  }, [lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap]);

  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      console.warn("Waves: Canvas or container ref not available on mount.");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.warn("Waves: Could not get 2D context from canvas.");
      return;
    }
    ctxRef.current = ctx;

    function setSize() {
      if (!container || !canvas) return;
      const bounds = container.getBoundingClientRect();
      boundingRef.current = bounds;
      canvas.width = bounds.width;
      canvas.height = bounds.height;
    }

    function setLines() {
      if (!canvas) return;
      const { width, height } = boundingRef.current;
      linesRef.current = [];
      const oWidth = width + 200; // Overdraw for edges
      const oHeight = height + 30; // Overdraw for edges
      const currentConfig = configRef.current;
      
      const totalLines = Math.ceil(oWidth / currentConfig.xGap);
      const totalPoints = Math.ceil(oHeight / currentConfig.yGap);
      const xStart = (width - currentConfig.xGap * totalLines) / 2;
      const yStart = (height - currentConfig.yGap * totalPoints) / 2;

      for (let i = 0; i <= totalLines; i++) {
        const pts: Point[] = [];
        for (let j = 0; j <= totalPoints; j++) {
          pts.push({
            x: xStart + currentConfig.xGap * i,
            y: yStart + currentConfig.yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 }
          });
        }
        linesRef.current.push(pts);
      }
    }

    function movePoints(time: number) {
      const lines = linesRef.current;
      const mouse = mouseRef.current;
      const noise = noiseRef.current;
      const currentConfig = configRef.current;

      lines.forEach((pts) => {
        pts.forEach((p) => {
          const move = noise.perlin2(
            (p.x + time * currentConfig.waveSpeedX) * 0.002,
            (p.y + time * currentConfig.waveSpeedY) * 0.0015
          ) * 12;
          p.wave.x = Math.cos(move) * currentConfig.waveAmpX;
          p.wave.y = Math.sin(move) * currentConfig.waveAmpY;

          const dx = p.x - mouse.sx;
          const dy = p.y - mouse.sy;
          const dist = Math.hypot(dx, dy);
          const l = Math.max(175, mouse.vs);

          if (dist < l) {
            const s = 1 - dist / l;
            const f = Math.cos(dist * 0.001) * s;
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065;
          }

          p.cursor.vx += (0 - p.cursor.x) * currentConfig.tension;
          p.cursor.vy += (0 - p.cursor.y) * currentConfig.tension;
          p.cursor.vx *= currentConfig.friction;
          p.cursor.vy *= currentConfig.friction;
          p.cursor.x += p.cursor.vx * 2;
          p.cursor.y += p.cursor.vy * 2;
          p.cursor.x = Math.min(currentConfig.maxCursorMove, Math.max(-currentConfig.maxCursorMove, p.cursor.x));
          p.cursor.y = Math.min(currentConfig.maxCursorMove, Math.max(-currentConfig.maxCursorMove, p.cursor.y));
        });
      });
    }

    function moved(point: Point, withCursor = true): { x: number, y: number } {
      const x = point.x + point.wave.x + (withCursor ? point.cursor.x : 0);
      const y = point.y + point.wave.y + (withCursor ? point.cursor.y : 0);
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    }

    function drawLines() {
      const localCtx = ctxRef.current;
      if (!localCtx || !canvas) return;
      
      const { width, height } = canvas;
      localCtx.clearRect(0, 0, width, height);
      localCtx.beginPath();
      localCtx.strokeStyle = configRef.current.lineColor;

      linesRef.current.forEach((points) => {
        if (points.length === 0) return;
        let p1 = moved(points[0]!, false);
        localCtx.moveTo(p1.x, p1.y);
        points.forEach((p, idx) => {
          const isLast = idx === points.length - 1;
          p1 = moved(p, !isLast);
          const p2 = moved(points[idx + 1] || points[points.length - 1]!, !isLast);
          localCtx.lineTo(p1.x, p1.y);
          if (isLast) localCtx.moveTo(p2.x, p2.y);
        });
      });
      localCtx.stroke();
    }

    let lastTimestamp = 0;
    function tick(timestamp: number) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      // const deltaTime = timestamp - lastTimestamp; // Could be used for time-based animation adjustments
      lastTimestamp = timestamp;

      const mouse = mouseRef.current;
      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;
      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const d = Math.hypot(dx, dy);
      mouse.v = d;
      mouse.vs += (d - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x; mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);

      if (containerRef.current) {
        containerRef.current.style.setProperty("--x", `${mouse.sx}px`);
        containerRef.current.style.setProperty("--y", `${mouse.sy}px`);
      }

      movePoints(timestamp); // Pass timestamp for consistent speed
      drawLines();
      frameIdRef.current = requestAnimationFrame(tick);
    }

    const onResize = () => {
      setSize();
      setLines();
    };
    const onMouseMove = (e: MouseEvent) => updateMouse(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateMouse(touch.clientX, touch.clientY);
    };
    
    function updateMouse(x: number, y: number) {
      const mouse = mouseRef.current;
      const b = boundingRef.current;
      mouse.x = x - b.left;
      mouse.y = y - b.top;
      if (!mouse.set) {
        mouse.sx = mouse.x; mouse.sy = mouse.y;
        mouse.lx = mouse.x; mouse.ly = mouse.y;
        mouse.set = true;
      }
    }

    setSize();
    setLines(); // Initial line setup
    frameIdRef.current = requestAnimationFrame(tick);

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <div
      ref={containerRef}
      className={`waves ${className}`}
      style={{
        position: "absolute",
        top: 0, left: 0, margin: 0, padding: 0,
        width: "100%", height: "100%", overflow: "hidden",
        backgroundColor, // This comes from props
        zIndex: -1, // Ensure it's behind other content
        ...style
      }}
    >
      <canvas ref={canvasRef} className="waves-canvas" />
    </div>
  );
}

export default Waves;

    