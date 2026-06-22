import { useRef, useState, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Avant",
  afterAlt = "Après",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const afterClipRef = useRef<HTMLDivElement>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const avantLabelRef = useRef<HTMLDivElement>(null);
  const apresLabelRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const rectRef = useRef<DOMRect | null>(null);
  const isDraggingRef = useRef(false);
  const posRef = useRef(50);
  const rafRef = useRef(0);

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const applyPosition = useCallback((pct: number) => {
    const afterClip = afterClipRef.current;
    const line = sliderLineRef.current;
    const handle = handleRef.current;
    const avant = avantLabelRef.current;
    const apres = apresLabelRef.current;
    const hint = hintRef.current;

    if (afterClip) afterClip.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    if (line) line.style.left = `${pct}%`;
    if (handle) handle.style.left = `${pct}%`;
    if (avant) avant.style.opacity = pct < 20 ? "0" : "1";
    if (apres) apres.style.opacity = pct > 80 ? "0" : "1";
    if (hint) hint.style.opacity = isDraggingRef.current ? "0" : "1";
  }, []);

  const updatePos = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;

      let rect = rectRef.current;
      if (!rect) {
        rect = container.getBoundingClientRect();
        rectRef.current = rect;
      }

      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      posRef.current = pct;
      applyPosition(pct);
    },
    [applyPosition]
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      const container = containerRef.current;
      if (!container) return;

      container.setPointerCapture(e.pointerId);
      container.focus({ preventScroll: true });

      isDraggingRef.current = true;
      setIsDragging(true);
      rectRef.current = null;
      updatePos(e.clientX);
    },
    [updatePos]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updatePos(e.clientX);
      });
    },
    [updatePos]
  );

  const onPointerUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
    rectRef.current = null;
    setSliderPosition(posRef.current);

    cancelAnimationFrame(rafRef.current);

    if (hintRef.current) {
      hintRef.current.style.opacity = "1";
    }
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = 2;
      let next = posRef.current;
      if (e.key === "ArrowLeft") next = Math.max(0, next - step);
      else if (e.key === "ArrowRight") next = Math.min(100, next + step);
      else return;

      posRef.current = next;
      applyPosition(next);
      setSliderPosition(next);
    },
    [applyPosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-[20px] cursor-ew-resize select-none touch-none focus:outline-none"
      style={{ aspectRatio: "4 / 3" }}
      tabIndex={0}
      role="slider"
      aria-label="Comparaison avant/après"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Bottom layer: Before image (full width) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Top layer: After image (clipped via GPU-composited clip-path) */}
      <div
        ref={afterClipRef}
        className="absolute inset-0"
        style={{ clipPath: "inset(0 50% 0 0)", willChange: "clip-path" }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        ref={sliderLineRef}
        className="absolute top-0 bottom-0 w-[2px] pointer-events-none z-10"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          willChange: "left",
          background:
            "linear-gradient(to bottom, transparent, var(--site-white) 15%, var(--site-white) 85%, transparent)",
        }}
      />

      {/* Slider handle */}
      <div
        ref={handleRef}
        className="absolute top-1/2 pointer-events-none z-20"
        style={{
          left: "50%",
          transform: "translate(-50%, -50%)",
          willChange: "left",
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-[-6px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(184, 148, 134, 0.3) 0%, transparent 70%)",
            transition: "opacity 0.3s ease",
            opacity: isDragging ? 1 : 0,
          }}
        />

        {/* Handle body */}
        <div
          className="relative w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "var(--site-white)",
            boxShadow:
              "0 4px 20px rgba(44, 34, 32, 0.25), 0 0 0 2px rgba(184, 148, 134, 0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            transform: isDragging ? "scale(1.15)" : "scale(1)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5L7 10L11 15"
              stroke="var(--site-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="10"
              y1="5"
              x2="10"
              y2="15"
              stroke="var(--site-primary)"
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M9 5L13 10L9 15"
              stroke="var(--site-secondary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        ref={avantLabelRef}
        className="absolute top-4 left-4 z-10 pointer-events-none"
        style={{ transition: "opacity 0.3s ease" }}
      >
        <span
          className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
          style={{
            background: "rgba(44, 34, 32, 0.65)",
            backdropFilter: "blur(8px)",
            color: "var(--site-white)",
            border: "1px solid rgba(255, 253, 251, 0.15)",
          }}
        >
          Avant
        </span>
      </div>

      <div
        ref={apresLabelRef}
        className="absolute top-4 right-4 z-10 pointer-events-none"
        style={{ transition: "opacity 0.3s ease" }}
      >
        <span
          className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
          style={{
            background: "rgba(111, 143, 124, 0.75)",
            backdropFilter: "blur(8px)",
            color: "var(--site-white)",
            border: "1px solid rgba(255, 253, 251, 0.15)",
          }}
        >
          Après
        </span>
      </div>

      {/* Initial instruction hint */}
      <div
        ref={hintRef}
        className="absolute bottom-4 left-1/2 z-10 pointer-events-none whitespace-nowrap"
        style={{
          transform: "translateX(-50%)",
          transition: "opacity 0.4s ease",
        }}
      >
        <span
          className="px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wide uppercase"
          style={{
            background: "rgba(44, 34, 32, 0.5)",
            backdropFilter: "blur(8px)",
            color: "var(--site-white)",
          }}
        >
          ← Glissez pour comparer →
        </span>
      </div>
    </div>
  );
}
