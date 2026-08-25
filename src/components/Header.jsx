import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function Header() {
  return (
    <header className="site-header">




               <div></div>


      <div className="header-inner">

        {/* Logo */}
        <Link to="/" className="journal-brand">

          <div className="brand-icon">
            <FaBookOpen />
          </div>

          <div className="brand-text">
            <div className="brand-name">
              UNIVERSITY JOURNAL
            </div>

            <div className="brand-subtitle">
              OF RESEARCH11
            </div>
          </div>

        </Link>


        {/* Navigation */}
        <nav className="main-navigation">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/archives"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Archives
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Header;