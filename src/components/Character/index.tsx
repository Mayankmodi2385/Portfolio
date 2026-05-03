const Character = () => {
  return (
    <div
      className="character-container"
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100vh",
        zIndex: 11,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <img
        src="/mayank.webp"
        alt="Mayank Modi"
        loading="eager"
        decoding="async"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "90%",
          maxHeight: "780px",
          width: "auto",
          objectFit: "contain",
          zIndex: 12,
          pointerEvents: "none",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)",
          filter:
            "drop-shadow(0 0 25px rgba(0,255,247,0.55)) drop-shadow(0 0 55px rgba(189,0,255,0.25))",
        }}
      />
      {/* Neon glow under photo */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%",
        transform: "translateX(-50%)", width: "340px", height: "70px",
        background: "radial-gradient(ellipse, rgba(0,255,247,0.22) 0%, rgba(189,0,255,0.12) 50%, transparent 70%)",
        filter: "blur(22px)", zIndex: 11, pointerEvents: "none",
      }} />
      {/* Left edge fade */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "15%", height: "100%",
        background: "linear-gradient(to right, #050810, transparent)",
        zIndex: 13, pointerEvents: "none",
      }} />
      {/* Right edge fade */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "15%", height: "100%",
        background: "linear-gradient(to left, #050810, transparent)",
        zIndex: 13, pointerEvents: "none",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: "120px",
        background: "linear-gradient(to top, #050810 0%, transparent 100%)",
        zIndex: 14, pointerEvents: "none",
      }} />
    </div>
  );
};

export default Character;