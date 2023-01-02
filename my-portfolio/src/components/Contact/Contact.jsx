import React from "react";
import { Linkedin, Envelope, Github } from "react-bootstrap-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact">
      <h2 className="section__title">Contact</h2>
      <div className="center-icons">
        <li>
          <Linkedin />
        </li>
        <li>
          <Github />
        </li>
        <li>
          <Envelope />
        </li>
      </div>
      <div>
        <p className="rights">© 2022 All rights reserved | Rodrigo Fernandez</p>
      </div>
    </section>
  );
};

export default Contact;
