import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-column">

          <div className="footer-brand">
            UNIVERSITY JOURNAL
          </div>

          <p>
            A scholarly publication dedicated to advancing
            research, knowledge, innovation, and academic
            discourse.
          </p>

        </div>


        <div className="footer-column">

          <h3>Journal</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/archives">
            Archives
          </Link>

        </div>


        <div className="footer-column">

          <h3>Current Issue</h3>

          <p>
            Volume 1, Issue 1
          </p>

          <p>
            2026
          </p>

          <p>
            ISSN: XXXX-XXXX
          </p>

        </div>


        <div className="footer-column">

          <h3>Connect</h3>

          <div className="social-icons">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="mailto:journal@example.com" aria-label="Email">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

      <p4>
  Copyright © 2026{" "}
  <span style={{ color: "#c5a24a;", fontWeight: "600" }}>GCU</span>{" "}
  All Rights Reserved.
</p4>

      </div>

    </footer>
  );
}

export default Footer;