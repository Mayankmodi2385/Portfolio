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
        height: "100vh",
        zIndex: 11,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      {/* Background glow behind the photo to make it visible */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "55%",
        height: "100%",
        background: "radial-gradient(ellipse at 50% 60%, rgba(30,35,60,0.95) 0%, rgba(15,18,35,0.7) 50%, transparent 80%)",
        zIndex: 10,
        pointerEvents: "none",
      }} />

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
          height: "90%",
          maxHeight: "780px",
          width: "auto",
          objectFit: "contain",
          zIndex: 12,
          pointerEvents: "none",

          // screen blend mode - shows photo, white bg becomes transparent on dark
          mixBlendMode: "screen",

          // Fade all 4 edges smoothly
          WebkitMaskImage: `
            linear-gradient(to top,    transparent 0%,  black 18%, black 82%, transparent 100%),
            linear-gradient(to right,  transparent 0%,  black 12%, black 88%, transparent 100%)
          `,
          maskImage: `
            linear-gradient(to top,    transparent 0%,  black 18%, black 82%, transparent 100%),
            linear-gradient(to right,  transparent 0%,  black 12%, black 88%, transparent 100%)
          `,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",

          filter:
            "drop-shadow(0 0 30px rgba(0,255,247,0.6)) drop-shadow(0 0 60px rgba(189,0,255,0.3)) brightness(1.05) contrast(1.05)",
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