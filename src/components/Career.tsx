import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack Developer</h4>
                <h5>MERN Stack</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built a full-stack car rental management system using React,
              Node.js, and Express.js. Delivered a paid freelance project
              (₹15,000) with JWT authentication, booking logic, Cloudinary file
              uploads, Excel export, and a responsive dashboard — deployed on
              Vercel and Render.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chat Sphere</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a real-time chat application using WebSockets (Socket.io),
              Node.js, Express, and MongoDB. Implemented user authentication,
              session handling, online/offline user tracking, and optimized
              real-time communication performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Influx – EV Charging App</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Full-stack web application fetching and displaying real-time EV
              charging station data via APIs. Built with React.js, REST API
              integration, error handling, and scalable architecture for live
              data updates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DigiDine</h4>
                <h5>Academic Project</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              QR-based smart restaurant ordering system using React.js and
              Node.js. Built REST APIs for order management, designed MongoDB
              schema, and implemented end-to-end real-time user interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
