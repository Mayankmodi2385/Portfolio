const Character = () => {
  return (
    <div className="character-model">
      <div className="character-rim" />
      <img
        src="/mayank.png"
        alt="Mayank Modi"
        style={{
          height: "85%",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          filter:
            "drop-shadow(0 0 30px rgba(0,255,247,0.6)) drop-shadow(0 0 80px rgba(189,0,255,0.3))",
        }}
      />
    </div>
  );
};

export default Character;