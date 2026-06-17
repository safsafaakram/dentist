const footerLinks = ["SERVICES", "OUR TEAM", "CLINIC HOURS", "PATIENT PORTAL", "PRIVACY POLICY"];

export function Footer() {
  return (
    <footer
      className="rounded-tl-[30px] rounded-tr-[30px] px-12 pt-16 pb-10"
      style={{ background: "#5a4c49" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Clinic info */}
        <div className="flex flex-col gap-4">
          <h3
            className="text-black uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: "-0.6px",
            }}
          >
            EL-BASAR CLINIC
          </h3>
          <p
            className="text-black"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "1.625",
              maxWidth: "320px",
            }}
          >
            The bold standard in Algerian ophthalmic care. Precision, clarity, and uncompromising quality.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-black hover:text-[#fcc8ac] transition-colors"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.7px",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-end justify-end h-full pt-8 md:pt-0">
          <p
            className="text-right"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              color: "rgba(5,5,5,0.6)",
              letterSpacing: "1.2px",
              lineHeight: "1.333",
            }}
          >
            © 2024 EL-BASAR OPHTHALMOLOGY ALGERIA.
            <br />
            ALL SIGHT RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
