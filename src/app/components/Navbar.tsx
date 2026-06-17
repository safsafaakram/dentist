export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between">
      {/* Logo */}
      <div className="bg-white px-6 pt-6 pb-5 rounded-b-3xl flex items-center gap-3 shadow-sm">
        <svg width="30" height="20" viewBox="0 0 29.3333 20" fill="none">
          <path
            d="M14.6667 16C16.3333 16 17.75 15.4167 18.9167 14.25C20.0833 13.0833 20.6667 11.6667 20.6667 10C20.6667 8.33333 20.0833 6.91667 18.9167 5.75C17.75 4.58333 16.3333 4 14.6667 4C13 4 11.5833 4.58333 10.4167 5.75C9.25 6.91667 8.66667 8.33333 8.66667 10C8.66667 11.6667 9.25 13.0833 10.4167 14.25C11.5833 15.4167 13 16 14.6667 16ZM14.6667 13.6C13.6667 13.6 12.8167 13.25 12.1167 12.55C11.4167 11.85 11.0667 11 11.0667 10C11.0667 9 11.4167 8.15 12.1167 7.45C12.8167 6.75 13.6667 6.4 14.6667 6.4C15.6667 6.4 16.5167 6.75 17.2167 7.45C17.9167 8.15 18.2667 9 18.2667 10C18.2667 11 17.9167 11.85 17.2167 12.55C16.5167 13.25 15.6667 13.6 14.6667 13.6ZM14.6667 20C11.4222 20 8.46667 19.0944 5.8 17.2833C3.13333 15.4722 1.2 13.0444 0 10C1.2 6.95556 3.13333 4.52778 5.8 2.71667C8.46667 0.905556 11.4222 0 14.6667 0C17.9111 0 20.8667 0.905556 23.5333 2.71667C26.2 4.52778 28.1333 6.95556 29.3333 10C28.1333 13.0444 26.2 15.4722 23.5333 17.2833C20.8667 19.0944 17.9111 20 14.6667 20Z"
            fill="#FBC5A6"
          />
        </svg>
        <span
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          className="text-[#161d16] text-xl tracking-tight whitespace-nowrap"
        >
          EL-BASAR CLINIC
        </span>
      </div>

      {/* Nav */}
      <div className="bg-white flex items-center gap-8 px-10 py-4 rounded-bl-[75px] shadow-sm mt-0">
        {["HERO", "SERVICE", "WORKS"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400 }}
            className="text-[#605850] text-sm tracking-widest uppercase hover:text-[#006d32] transition-colors"
          >
            [ {item} ]
          </a>
        ))}
        <button
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          className="bg-[#fcc8ac] text-white text-xs tracking-widest uppercase px-6 py-3 rounded-full shadow-md hover:bg-[#ee6318] transition-colors whitespace-nowrap"
        >
          BOOK NOW
        </button>
      </div>
    </header>
  );
}
