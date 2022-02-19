import emailjs from "emailjs-com";
import React from "react";

const ContactForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          if (result.status === 200) {
            alert("Thank you for your mail. We will contact you soon.");
            e.target.reset();
          }
        },
        (error) => {
          if (error) {
            alert("OPPS!!! There are some problem. Please Try Again.");
          }
        }
      );
  };

  return (
    <div className="col-lg-6 col-md-10 ms-auto me-auto">
      <div className="form_container">
        <h1 className="font_bebas_about fs-1">Don't Worry</h1>
        <h2 className="text-center fs-1 mb-3 font_bebas_about">
          We are Ready to <span className="about_yellow">hear you</span>
        </h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="subject"
              type="text"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" className="w-100 btn form_submit">
            Submit
          </button>
        </form>
        <p className="mt-3">
          <i>
            Sending to
            <a
              className="text-green"
              rel="noopener noreferrer"
              target="_blank"
              href="rabbani.cse.eub@gmail.com"
            >
              rabbani.cse.eub@gmail.com
            </a>
          </i>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
