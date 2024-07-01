import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import Notification from "../Notifcation/NotFound";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setNotification({
      show: true,
      message: "Message sent successfully!",
      type: "success",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}

      <div className="contact_back container">
        <div className="contact_txt">
          <h2>Contact us</h2>
          <p>
            Send us your request and we will get in touch with you as soon as
            possible
          </p>
          <div className="bottom">
            <span>
              <BsFillTelephoneFill /> +380 98 782 82 23
            </span>{" "}
            <br />
            <span>
              <SiGmail /> bilolhuzayfa0@gmail.com
            </span>
          </div>
        </div>

        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
