import "./Contact.css";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone } from "@mdi/js";

export default function Contact() {
  return (
    <section id="contact-section" className="contact">
      <h1 className="contact-heading">
        Contact <span>Me</span>
      </h1>
      <div className="contact-container">
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <p>You can contact me at:</p>
        <div className="contact-details-container">
          <div className="contact-details">
            <Icon className="contact-icon" path={mdiEmail} size={2} />
            shrawn2002@gmail.com
          </div>
          <div className="contact-details">
            <Icon className="contact-icon" path={mdiPhone} size={2} />
            0469293649
          </div>
        </div>
      </div>
    </section>
  );
}
