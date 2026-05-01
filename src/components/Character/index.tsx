import { Suspense, lazy, useEffect, useState } from "react";

const Scene = lazy(() => import("./Scene"));

const Character = () => {
  const [supportsWebGL, setSupportsWebGL] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Check if WebGL actually works before loading the heavy 3D scene
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setSupportsWebGL(!!gl);
    } catch {
      setSupportsWebGL(false);
    }
    setChecked(true);
  }, []);

  if (!checked) return null;

  return (
    <div className="character-container" style={{ position: "relative" }}>
      {/* Only load heavy 3D scene if WebGL works (desktop) */}
      {supportsWebGL && (
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      )}

      {/* Your photo - always visible, blends on dark bg */}
      <img
        src="/mayank.png"
        alt="Mayank Modi"
        style={{
          height: supportsWebGL ? "85%" : "75vh",
          maxHeight: "750px",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 12,
          pointerEvents: "none",
          objectFit: "contain",
          // Strong blend: fades bottom into dark bg, hides checkerboard
          maskImage:
            "linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)",
          filter:
            "drop-shadow(0 0 30px rgba(0,255,247,0.5)) drop-shadow(0 0 60px rgba(189,0,255,0.25))",
        }}
      />

      {/* Neon glow pool under photo */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "80px",
          background:
            "radial-gradient(ellipse, rgba(0,255,247,0.25) 0%, rgba(189,0,255,0.15) 50%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: 11,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Character;