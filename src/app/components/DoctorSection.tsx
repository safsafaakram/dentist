import imgDoctor from "figma:asset/a165835bfeb9784c2b610def7a5801a89d6bbdb2.png";

export function DoctorSection() {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Doctor image */}
        <div className="relative flex-shrink-0 w-full lg:w-[480px] h-[420px]">
          {/* Decorative background shape */}
          <div
            className="absolute inset-6 bottom-0"
            style={{
              background: "rgba(247, 223, 218, 0.6)",
              borderRadius: "213px 78px 218px 136px",
            }}
          />
          <div
            className="absolute overflow-hidden"
            style={{
              top: "24px",
              left: "24px",
              right: "48px",
              bottom: "0",
              borderRadius: "213px 78px 218px 136px",
            }}
          >
            <img
              src={imgDoctor}
              alt="Dr. Karim Yelles"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Name */}
          <h2
            className="text-[#161d16] uppercase text-center lg:text-left"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              letterSpacing: "0.6px",
            }}
          >
            DR. KARIM YELLES
          </h2>

          {/* Specialist badge */}
          <div className="flex justify-center lg:justify-start">
            <span
              className="backdrop-blur-sm px-4 py-1 rounded-full"
              style={{
                background: "rgba(89, 99, 38, 0.1)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                color: "#596326",
                letterSpacing: "0.6px",
              }}
            >
              SPECIALIST
            </span>
          </div>

          {/* Description */}
          <p
            className="text-[#3d4a3d] text-center lg:text-left"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.625",
            }}
          >
            Expertise in invaluable blablablabla blablablabla blablablabla
            blablablabla blablablabla blablablabla blablablabla blablablabla
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button
              className="relative px-8 py-4 rounded-full text-white flex items-center gap-3 hover:opacity-90 transition-opacity"
              style={{
                background: "#ee6318",
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                letterSpacing: "0.5px",
              }}
            >
              contact from here
              <span className="border-r-2 border-t-2 border-white w-[6px] h-[6px] inline-block rotate-45 mb-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
