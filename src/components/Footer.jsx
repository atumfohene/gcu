
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import gcuLogo from "../assets/gcu_white.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="gcu-footer">

      {/* =========================
          CONTACT INFORMATION
      ========================== */}
      <div className="gcu-contact-bar">

        {/* Phone */}
        <a
          href="tel:+233596917214"
          className="gcu-contact-item"
        >
          <div className="gcu-contact-icon">
            <FaPhoneAlt />
          </div>

          <div>
            <span className="gcu-contact-label">
              Call us:
            </span>

            <strong>
              +233 53 570 8738
            </strong>
          </div>
        </a>


        {/* Email */}
        <a
          href="mailto:info@gru.edu.gh"
          className="gcu-contact-item"
        >
          <div className="gcu-contact-icon">
            <FaEnvelope />
          </div>

          <div>
            <span className="gcu-contact-label">
              Email us 24/7 hours:
            </span>

            <strong>
              info@gru.edu.gh
            </strong>
          </div>
        </a>


        {/* Location */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Garden+City+University+Kumasi+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="gcu-contact-item"
        >
          <div className="gcu-contact-icon">
            <FaMapMarkerAlt />
          </div>

          <div>
            <span className="gcu-contact-label">
              Our University Location:
            </span>

            <strong>
              Kumasi - Ghana
            </strong>
          </div>
        </a>

      </div>


      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="gcu-footer-main">

        {/* Logo */}
        <div className="gcu-logo-container">

          <a
            href="https://gcu.edu.gh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gcuLogo}
              alt="Garden City University"
              className="gcu-logo"
            />
          </a>

        </div>


        {/* Social Media */}
        <div className="gcu-social-section">

          <h3>FOLLOW US ON:</h3>

          <div className="gcu-social-icons">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/gardencityuniversity-college/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

        </div>


        {/* =========================
            FOOTER LINKS
        ========================== */}
        <div className="gcu-footer-links">


          {/* WHO WE ARE */}
          <div className="gcu-link-column">

            <h3>Who We Are</h3>

            <div className="gcu-heading-line">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul>
              <li>
                <a href="/vision-mission">
                  Vision &amp; Mission
                </a>
              </li>

              <li>
                <a href="/university-history">
                  University History
                </a>
              </li>

              <li>
                <a href="/university-council">
                  University Council
                </a>
              </li>

              <li>
                <a href="/university-anthem">
                  University Anthem
                </a>
              </li>

              <li>
                <a href="/map-direction">
                  Map &amp; Direction
                </a>
              </li>

              <li>
                <a href="/founders-office">
                  Founder's Office
                </a>
              </li>
            </ul>

          </div>


          {/* ADMISSIONS */}
          <div className="gcu-link-column">

            <h3>Admissions</h3>

            <div className="gcu-heading-line">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul>
              <li>
                <a href="/entry-requirements">
                  Entry Requirements
                </a>
              </li>

              <li>
                <a href="/undergraduate-programmes">
                  Undergraduate Programmes
                </a>
              </li>

              <li>
                <a href="/graduate-programmes">
                  Graduate Programmes
                </a>
              </li>

              <li>
                <a href="/international-applicants">
                  International Applicants
                </a>
              </li>

              <li>
                <a href="/academic-calendar">
                  Academic Calendar
                </a>
              </li>

              <li>
                <a href="/accommodation">
                  Accommodation
                </a>
              </li>
            </ul>

          </div>


          {/* ACADEMICS */}
          <div className="gcu-link-column">

            <h3>Academics</h3>

            <div className="gcu-heading-line">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul>
              <li>
                <a href="/school-business-applied-sciences">
                  School of Business &amp; Applied Sciences
                </a>
              </li>

              <li>
                <a href="/school-graduate-studies">
                  School of Graduate Studies &amp; Research
                </a>
              </li>

              <li>
                <a href="/school-health-allied-sciences">
                  School of Health &amp; Allied Sciences
                </a>
              </li>

              <li>
                <a href="/codel">
                  CODeL
                </a>
              </li>

              <li>
                <a href="/academic-calendar">
                  Academic Calendar
                </a>
              </li>

              <li>
                <a href="/university-library">
                  University Library
                </a>
              </li>
            </ul>

          </div>


          {/* STAFF */}
          <div className="gcu-link-column">

            <h3>Staff</h3>

            <div className="gcu-heading-line">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul>
              <li>
                <a href="/staff-documents">
                  Staff Documents
                </a>
              </li>

              <li>
                <a href="/vacancies">
                  Vacancies
                </a>
              </li>

              <li>
                <a href="/gcu-policies">
                  GCU Policies
                </a>
              </li>

              <li>
                <a href="/teaching-learning-policy">
                  Teaching &amp; Learning Policy
                </a>
              </li>

              <li>
                <a href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Staff Mail (GSuite)
                </a>
              </li>

              <li>
                <a href="/staff-portal">
                  Staff Portal
                </a>
              </li>
            </ul>

          </div>


          {/* STUDENT LIFE */}
          <div className="gcu-link-column">

            <h3>Student Life</h3>

            <div className="gcu-heading-line">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul>
              <li>
                <a href="/student-documents">
                  Student Documents
                </a>
              </li>

              <li>
                <a href="/course-registration">
                  Course Registration
                </a>
              </li>

              <li>
                <a href="/e-learning">
                  E-Learning Portal
                </a>
              </li>

              <li>
                <a href="/academic-calendar">
                  Academic Calendar
                </a>
              </li>

              <li>
                <a href="/src">
                  SRC
                </a>
              </li>

              <li>
                <a href="/career-centre">
                  Career Centre
                </a>
              </li>
            </ul>

          </div>

        </div>


        {/* =========================
            BOTTOM FOOTER
        ========================== */}
        <div className="gcu-footer-bottom">

        <p>
  Copyright © 2026{" "}
  <span className="gcu-copyright-brand">GCU</span>{" "}
  All Rights Reserved.
</p>

          <div className="gcu-bottom-links">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;






// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter,
//   FaEnvelope
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="site-footer">

//       <div className="footer-container">

//         <div className="footer-column">

//           <div className="footer-brand">
//             UNIVERSITY JOURNAL
//           </div>

//           <p>
//             A scholarly publication dedicated to advancing
//             research, knowledge, innovation, and academic
//             discourse.
//           </p>

//         </div>


//         <div className="footer-column">

//           <h3>Journal</h3>

//           <Link to="/">
//             Home
//           </Link>

//           <Link to="/archives">
//             Archives
//           </Link>

//         </div>


//         <div className="footer-column">

//           <h3>Current Issue</h3>

//           <p>
//             Volume 1, Issue 1
//           </p>

//           <p>
//             2026
//           </p>

//           <p>
//             ISSN: XXXX-XXXX
//           </p>

//         </div>


//         <div className="footer-column">

//           <h3>Connect</h3>

//           <div className="social-icons">

//             <a href="#" aria-label="Facebook">
//               <FaFacebookF />
//             </a>

//             <a href="#" aria-label="LinkedIn">
//               <FaLinkedinIn />
//             </a>

//             <a href="#" aria-label="Twitter">
//               <FaTwitter />
//             </a>

//             <a href="mailto:journal@example.com" aria-label="Email">
//               <FaEnvelope />
//             </a>

//           </div>

//         </div>

//       </div>


//       <div className="footer-bottom">

//       <p4>
//   Copyright © 2026{" "}
//   <span style={{ color: "#c5a24a;", fontWeight: "600" }}>GCU</span>{" "}
//   All Rights Reserved.
// </p4>

//       </div>

//     </footer>
//   );
// }

// export default Footer;