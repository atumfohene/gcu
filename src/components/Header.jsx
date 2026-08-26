import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">

      <div
        style={{
          backgroundColor: "#FCD374",
          width: "100%",
          display: "flex",
          minHeight: "80px",
        }}
      >

        {/* =========================================
            80% GREEN SECTION
        ========================================= */}

        <div
          style={{
            width: "80%",
            backgroundColor: "#017F7B",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "0 30px",
            boxSizing: "border-box",
            borderBottomRightRadius: "40px",
          }}
        >

          {/* =========================================
              NAVIGATION
          ========================================= */}

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingTop: "18px",
              width: "100%",
            }}
          >

            {/* HOME */}

            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
                opacity: isActive ? 1 : 0.9,
              })}
            >
              STUDENTS PORTAL
            </NavLink>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* ARCHIVES */}

            <NavLink
              to="/archives"
              style={({ isActive }) => ({
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
                opacity: isActive ? 1 : 0.9,
              })}
            >
              STAFF PORTAL
            </NavLink>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* CURRENT ISSUE */}

            <NavLink
              to="/current-issue"
              style={({ isActive }) => ({
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
                opacity: isActive ? 1 : 0.9,
              })}
            >
              CONTACT
            </NavLink>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* ABOUT */}

            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
                opacity: isActive ? 1 : 0.9,
              })}
            >
              APPLY ONLINE
            </NavLink>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* AUTHOR GUIDELINES */}

            <NavLink
              to="/author-guidelines"
              style={({ isActive }) => ({
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
                opacity: isActive ? 1 : 0.9,
              })}
            >
              ETHICAL CLEARANCE PORTAL
            </NavLink>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* CONTACT */}

            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
                opacity: isActive ? 1 : 0.9,
              })}
            >
              GCU APPS
            </NavLink>

          </nav>

        </div>


        {/* =========================================
            20% YELLOW SECTION
            LEFT COMPLETELY UNCHANGED
        ========================================= */}

        <div
          style={{
            width: "20%",
            backgroundColor: "#FCD374",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >

          <span
            style={{
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
          </span>

        </div>

      </div>


      <div>
      </div>

    </header>
  );
}

export default Header;