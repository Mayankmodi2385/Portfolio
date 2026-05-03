const Character = () => {
  return (
    <div
      className="character-container"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100%",
        zIndex: 11,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <img
        src="/mayank.png"
        alt="Mayank Modi"
        loading="eager"
        decoding="async"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "92%",
          maxHeight: "800px",
          width: "auto",
          objectFit: "contain",
          zIndex: 12,
          pointerEvents: "none",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, black 15%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to top, transparent 0%, black 15%, black 88%, transparent 100%)",
          filter:
            "drop-shadow(0 0 30px rgba(0,255,247,0.6)) drop-shadow(0 0 60px rgba(189,0,255,0.3))",
        }}
      />

      {/* Neon glow under photo */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%",
        transform: "translateX(-50%)", width: "340px", height: "90px",
        background: "radial-gradient(ellipse, rgba(0,255,247,0.3) 0%, rgba(189,0,255,0.15) 50%, transparent 70%)",
        filter: "blur(25px)", zIndex: 13, pointerEvents: "none",
      }} />

      {/* Left edge fade */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "20%", height: "100%",
        background: "linear-gradient(to right, #050810 0%, transparent 100%)",
        zIndex: 14, pointerEvents: "none",
      }} />

      {/* Right edge fade */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "20%", height: "100%",
        background: "linear-gradient(to left, #050810 0%, transparent 100%)",
        zIndex: 14, pointerEvents: "none",
      }} />

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: "140px",
        background: "linear-gradient(to top, #050810 0%, transparent 100%)",
        zIndex: 15, pointerEvents: "none",
      }} />

      {/* Top fade */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "80px",
        background: "linear-gradient(to bottom, #050810 0%, transparent 100%)",
        zIndex: 15, pointerEvents: "none",
      }} />
    </div>
  );
};

export default Character;