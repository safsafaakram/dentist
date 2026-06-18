import { useRef, useState, useCallback, useEffect } from "react";

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
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 2;
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - step));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + step));
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = "none";
      return () => {
        document.body.style.userSelect = "";
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-[20px] cursor-ew-resize select-none focus:outline-none"
      style={{ aspectRatio: "4 / 3" }}
      tabIndex={0}
      role="slider"
      aria-label="Comparaison avant/après"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={() => {
        setIsDragging(false);
        setIsHovering(false);
      }}
      onPointerEnter={() => setIsHovering(true)}
    >
      {/* Bottom layer: Before image (full width) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Top layer: After image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
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
        className="absolute top-0 bottom-0 w-[2px] pointer-events-none z-10"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent, var(--site-white) 15%, var(--site-white) 85%, transparent)",
        }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-1/2 pointer-events-none z-20"
        style={{
          left: `${sliderPosition}%`,
          transform: "translate(-50%, -50%)",
          transition: isDragging ? "none" : "left 0.1s ease-out",
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-[-6px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(184, 148, 134, 0.3) 0%, transparent 70%)",
            transition: "opacity 0.3s ease",
            opacity: isHovering || isDragging ? 1 : 0,
          }}
        />

        {/* Handle body */}
        <div
          className="relative w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "var(--site-white)",
            boxShadow: "0 4px 20px rgba(44, 34, 32, 0.25), 0 0 0 2px rgba(184, 148, 134, 0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            transform: isDragging ? "scale(1.15)" : "scale(1)",
          }}
        >
          {/* Arrow icons */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left arrow */}
            <path
              d="M11 5L7 10L11 15"
              stroke="var(--site-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Divider line */}
            <line
              x1="10"
              y1="5"
              x2="10"
              y2="15"
              stroke="var(--site-primary)"
              strokeWidth="1"
              opacity="0.4"
            />
            {/* Right arrow */}
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
        className="absolute top-4 left-4 z-10 pointer-events-none"
        style={{
          opacity: sliderPosition < 20 ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
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
        className="absolute top-4 right-4 z-10 pointer-events-none"
        style={{
          opacity: sliderPosition > 80 ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
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
        className="absolute bottom-4 left-1/2 z-10 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          opacity: isDragging ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      >
        <span
          className="px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wide uppercase whitespace-nowrap"
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
