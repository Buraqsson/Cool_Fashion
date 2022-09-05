import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h2 className="m-4">This is Cool Fashion!</h2>

      <div className="contactParent ">
        <div className="companyInfo">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            placeat nemo fuga dolorum magnam quasi temporibus tempora sequi! Eos
            aperiam accusantium alias amet. Voluptatem, commodi necessitatibus.
            Dolorem iste nobis vel.
          </p>
          <p>
            <strong>Phone:</strong> 0012 123 123 23
          </p>
          <p>
            <strong>Email:</strong> contact@coolfashion.com
          </p>
        </div>
        <div className="companyImage">
          <img
            src="https://via.placeholder.com/450x290?text=CompanyImg"
            alt=""
          />
        </div>

        <div className="contactForm">
          <h3>Contact us on Cool Fashion!</h3>
          <form className="needs-validation">
            <div className="row mb-3">
              <div className="col">
                {/* <label for="first-name">*First Name</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder="First name (Required)"
                  aria-label="First name"
                  required
                />
              </div>

              <div className="col">
                {/* <label for="last-name">Last Name</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email (Required)"
                  aria-label="Email"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                {/* <label for="message">Message</label> */}
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message (Required)"
                  aria-label="Message"
                  rows="3"
                  required
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
