import React, { useState } from "react";
import "./contact.css";
import { LuMailOpen } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [userName, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState(null);

  const contactFormHandler = async (e) => {
    e.preventDefault();
    const email = userEmail.replace(/[@.]/g, "");

    const formData = {
      userName,
      userEmail,
      userSubject,
      userMessage,
    };

    try {
      const response = await fetch(
        `https://portfolio-1a91a-default-rtdb.firebaseio.com/contactform/${email}.json`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send message!");
      }
      setAlertMessage({
        type: "success",
        message: "Your message has been sent successfully!",
      });
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setTimeout(() => setAlertMessage(null), 2000);
      setUsername("");
      setUserEmail("");
      setUserSubject("");
      setUserMessage("");
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <LuMailOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">kambojdolly107919@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/Dolly62"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/dolly-kamboj-a21a79210"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {alertMessage && (
          <div className="form__alert">
            <p className={`alert ${alertMessage.type}`}>
              {alertMessage.message}
            </p>
          </div>
        )}

        <form onSubmit={contactFormHandler} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name.."
                className="form__control"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email.."
                className="form__control"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject.."
                className="form__control"
                value={userSubject}
                onChange={(e) => setUserSubject(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              className="form__control textarea"
              placeholder="Your Message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
