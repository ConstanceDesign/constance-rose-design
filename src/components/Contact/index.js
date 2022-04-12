import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./styles.css";

function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { firstName, lastName, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.firstName]: e.target.value });
      setFormState({ [e.target.lastName]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("valid email required");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} field is required`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section>
      <p>If you like how I dev & design, drop me a line!</p>
      <h6>(please allow up to one week for a response)</h6>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="firstName"></label>
          <input
            type="text"
            firstName="firstName"
            placeholder="FIRST NAME"
            defaultValue={firstName}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="lastName"></label>
          <input
            type="text"
            lastName="lastName"
            placeholder="LAST NAME"
            defaultValue={lastName}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="email"></label>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="message"></label>
          <textarea
            className="textarea primary-bg dark-text"
            name="message"
            placeholder="Write here..."
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button
          className="submit-button"
          // data-testid="button"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
