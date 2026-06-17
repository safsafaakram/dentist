import imgDivWave from "figma:asset/d294773d63b1f9824ca739cbaafe1ca2bbafd457.png";
import imgDivWave2 from "figma:asset/2898627533355a86b957d1a1596f5f836915228c.png";

const LocationIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
    <path
      d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
      fill="#006D32"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
      fill="#006D32"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
      fill="#006D32"
    />
  </svg>
);

export function ContactSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#f7dfda" }}>
      {/* Top wave decoration */}
      <div className="w-full h-32 relative overflow-hidden pointer-events-none">
        <img src={imgDivWave} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="px-8 pb-16 max-w-7xl mx-auto">
        <div className="max-w-xl">
          {/* Heading */}
          <div className="relative inline-block mb-8">
            <h2
              className="text-[#161d16] uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                letterSpacing: "-0.8px",
              }}
            >
              INITIATE CONTACT
            </h2>
            <div
              className="absolute -bottom-2 left-0 h-1 rounded-full"
              style={{
                width: "64px",
                background: "linear-gradient(to right, #006d32, rgba(0,109,50,0))",
              }}
            />
          </div>

          <p
            className="text-[#3d4a3d] mb-12"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.625",
            }}
          >
            Schedule your comprehensive evaluation or reach out for urgent clinical inquiries.
          </p>

          {/* Contact info items */}
          <div className="flex flex-col gap-8">
            {/* Headquarters */}
            <div className="flex items-start gap-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.3)" }}
              >
                <LocationIcon />
              </div>
              <div>
                <p
                  className="text-[#006d32] uppercase mb-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "1.4px",
                  }}
                >
                  HEADQUARTERS
                </p>
                <p
                  className="text-[#3d4a3d]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.625",
                  }}
                >
                  45 Avenue de l'Indépendance
                  <br />
                  Algiers, Algeria 16000
                </p>
              </div>
            </div>

            {/* Direct Line */}
            <div className="flex items-start gap-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.3)" }}
              >
                <PhoneIcon />
              </div>
              <div>
                <p
                  className="text-[#006d32] uppercase mb-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "1.4px",
                  }}
                >
                  DIRECT LINE
                </p>
                <p
                  className="text-[#3d4a3d]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: "20px",
                    letterSpacing: "0.5px",
                  }}
                >
                  +213 21 00 00 00
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.3)" }}
              >
                <ClockIcon />
              </div>
              <div>
                <p
                  className="text-[#006d32] uppercase mb-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "1.4px",
                  }}
                >
                  OPERATING HOURS
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.625",
                    color: "#3d4a3d",
                  }}
                >
                  Sun - Thu: 08:00 - 17:00
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.625",
                    color: "rgba(61,74,61,0.7)",
                  }}
                >
                  Fri - Sat: Emergency Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration (flipped) */}
      <div className="w-full h-32 relative overflow-hidden pointer-events-none">
        <img
          src={imgDivWave2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-y-[-1]"
        />
      </div>
    </section>
  );
}
