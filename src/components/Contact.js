import "./Contact.css";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone } from "@mdi/js";

export default function Contact() {
  return (
    <div id="contact-section" className="contact">
      <h1 className="contact-heading">
        Contact<span>Me</span>
      </h1>
      <div className="contact-container">
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <p>You can find me at:</p>
        <div className="contact-btn-container">
          <button className="contact-btn">
            <Icon className="contact-icon" path={mdiEmail} size={2} />
            shrawn2002@gmail.com
          </button>
          <button className="contact-btn">
            <Icon className="contact-icon" path={mdiPhone} size={2} />
            0469293649
          </button>
          <div>
            <i className="devicon-linkedin-plain contact-btn"></i>
            <i className="devicon-github-original contact-btn"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
