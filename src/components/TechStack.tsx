import "./styles/TechStack.css";

const techs = [
  { name: "React", icon: "/images/react2.webp" },
  { name: "Node.js", icon: "/images/node2.webp" },
  { name: "Express", icon: "/images/express.webp" },
  { name: "MongoDB", icon: "/images/mongo.webp" },
  { name: "MySQL", icon: "/images/mysql.webp" },
  { name: "JavaScript", icon: "/images/javascript.webp" },
  { name: "TypeScript", icon: "/images/typescript.webp" },
  { name: "Next.js", icon: "/images/next1.webp" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-grid">
        {techs.map((tech, i) => (
          <div className="tech-card" key={i}>
            <div className="tech-card-inner">
              <img src={tech.icon} alt={tech.name} loading="lazy" />
              <span>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;