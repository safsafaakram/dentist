import imgHeroDeco from "figma:asset/a9a03805db38fa6ae1a336eb9b49484e00c57f89.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-white flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={imgHeroDeco}
          alt=""
          className="absolute right-0 top-0 h-full w-auto object-cover object-right"
          style={{ maxWidth: "65%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 pt-40 pb-24">
        {/* Badge */}
        <div className="inline-flex mb-8">
          <span
            className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-full px-5 py-2 shadow-sm"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            <span className="text-[#0b0b0b] text-xs tracking-[1.2px] uppercase">
              ALGERIA'S PREMIER EYE CENTER
            </span>
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="uppercase leading-none mb-6 max-w-3xl"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(52px, 7vw, 96px)",
            background: "linear-gradient(to right, #006d32 0%, #161d16 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-2.5px",
            lineHeight: "0.9",
          }}
        >
          YOUR EYES IS OUR
          <br />
          PRIORETY
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#3d4a3d] max-w-xl mb-10"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "1.625",
          }}
        >
          Expert ophthalmological care, precision diagnostics, and advanced
          surgical interventions in a modern clinical environment. See the world
          with unprecedented clarity.
        </p>

        {/* CTA Button */}
        <button
          className="bg-[#0b0b0b] text-white flex items-center gap-3 px-8 py-4 rounded-full shadow-lg hover:bg-[#006d32] transition-colors"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          <span className="text-sm tracking-widest uppercase">BOOK CONSULTATION</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
