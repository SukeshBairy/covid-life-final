import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contactHeading">Contact us</h1>

      <div className="contactCards">
        <div className="contactCard">
          {" "}
          <img src="/images/Surya.jpeg" alt="" />
          <h3>Surya G</h3>
          <h4> 8073451526 </h4>
          <h4>suryaa.g031@gmail.com </h4>
        </div>
        <div className="contactCard">
          <img src="/images/Tejas.jpeg" alt="" />
          <h3> Tejas Gowda S</h3>
          <h4> 861827294 </h4>
          <h4>tejasgowda713@gmail.com </h4>
        </div>
        <div className="contactCard">
          {" "}
          <img src="/images/Thanmai.jpeg" alt="" />
          <h3> Thanmai B K</h3>
          <h4>9035852683 </h4>
          <h4> thanmaibk@gmail.com </h4>
        </div>
        <div className="contactCard">
          {" "}
          <img src="/images/Sukesh.jpeg" alt="" />
          <h3>Sukesh S Bairy</h3>
          <h4>9686853769 </h4>
          <h4> sukeshbairy@gmail.com </h4>
        </div>
      </div>

      <h2 style={{ marginLeft: "22%", color: "white", marginTop: "100px" }}>
        Submit your Details here
      </h2>

      <form className="formDetails">
        <div className="form">
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="contact__name"
              id="contactlabel__name"
              className="contactlabel__name"
            >
              Name :
            </label>
            <input className="contact__name" id="contact__name" type="text" />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="contact__email"
              id="contactlabel__email"
              className="contactlabel__email"
            >
              Email :
            </label>
            <input
              className="contact__email"
              id="contact__email"
              type="email"
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="contact__phone"
              id="contactlabel__phone"
              className="contactlabel__phone"
            >
              Phone Number :
            </label>
            <input className="contact__phone" id="contact__phone" type="text" />
          </div>
        </div>

        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
