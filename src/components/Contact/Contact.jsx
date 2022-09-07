import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="row contactParent ">
        <div className="col companyAll">
          <div className="row infoPlusImg">
            <div className="col companyInfo">
              <h2 className="contactHeader my-4">This is Cool Fashion!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                esse voluptatum est tempore saepe necessitatibus nemo
                laboriosam, animi iste commodi qui atque nesciunt exercitationem
                magnam temporibus tempora omnis, explicabo repellendus sapiente
                sunt. A assumenda sequi sed eaque voluptate veniam optio,
                exercitationem ipsum. <br />
                <br />
                Aliquid, quibusdam porro? Molestias incidunt fugiat sint quos
                porro, voluptatum voluptatem ipsum possimus laudantium
                necessitatibus!
              </p>
              <p>
                <strong>Phone:</strong> 0012 123 123 23
              </p>
              <p>
                <strong>Email:</strong> contact@coolfashion.com
              </p>
            </div>
            <div className="col companyImage">
              <img src="https://picsum.photos/id/378/480/270" alt="" />
            </div>
          </div>
        </div>

        <div className="contactForm">
          <h3 className="contactSmallHeader">Contact us!</h3>
          <form className="needs-validation mt-4">
            <div className="row mb-3">
              <div className="col">
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
              <div className="col-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email (Required)"
                  aria-label="Email"
                  required
                />
              </div>
              <div className="col input-group ">
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  required
                >
                  <option selected disabled>
                    Choose your subject:
                  </option>
                  <option value="1">Support</option>
                  <option value="2">Business</option>
                  <option value="3">Service</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
              <p className="count">{count}/400</p>
              <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message (Required)"
                  aria-label="Message"
                  rows="3"
                  maxlength="400"
                  onChange={e => setCount(e.target.value.length)}
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

            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
