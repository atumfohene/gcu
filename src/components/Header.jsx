
import React from "react";

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

            {/* STUDENTS PORTAL */}

            <a
              href="https://gcu.edu.gh"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
              }}
            >
              STUDENTS PORTAL
            </a>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* STAFF PORTAL */}

            <a
              href="https://gcu.edu.gh"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
              }}
            >
              STAFF PORTAL
            </a>


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

            <a
              href="https://gcu.edu.gh"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
              }}
            >
              CONTACT
            </a>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* APPLY ONLINE */}

            <a
              href="https://gcu.edu.gh"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
              }}
            >
              APPLY ONLINE
            </a>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* ETHICAL CLEARANCE PORTAL */}

            <a
              href="https://gcu.edu.gh"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
              }}
            >
              ETHICAL CLEARANCE PORTAL
            </a>


            {/* DIVIDER */}

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                flexShrink: 0,
              }}
            />


            {/* GCU APPS */}

            <a
              href="https://gcu.edu.gh"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "0 18px",
                whiteSpace: "nowrap",
              }}
            >
              GCU APPS
            </a>

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
