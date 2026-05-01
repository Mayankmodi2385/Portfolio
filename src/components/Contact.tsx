import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/modimayank63/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — mayank-modi
              </a>
            </p>
            <p>
              <a
                href="mailto:mayankmodi7126@gmail.com"
                data-cursor="disable"
              >
                mayankmodi7126@gmail.com
              </a>
            </p>
            <p>+91-8839600663</p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Engineering, MIT Arts, Design and Technology
              University, Pune — 2022–2026 (CGPA: 7.2)
            </p>
            <p>
              Diploma in Computer Science, N.M.S.S. School, Burhanpur —
              2019–2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Mayankmodi2385"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/modimayank63/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "1rem" }}>Certifications</h4>
            <p style={{ fontSize: "0.85rem", opacity: 0.75 }}>
              AWS Academy Cloud Foundations
            </p>
            <p style={{ fontSize: "0.85rem", opacity: 0.75 }}>
              Python Programming
            </p>
            <p style={{ fontSize: "0.85rem", opacity: 0.75 }}>
              Networking Basics — Cisco
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mayank Modi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
