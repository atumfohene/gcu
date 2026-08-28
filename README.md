---change papers/paper-1 to something meaningful

---anytime you want to buy email or domain from Ghana.com, change the home page from Garden CIty to something else.


---edit all the NavLinks and The Footer Links to corresponding site

--- check if you can add image within a publication

---always update App.tsx for header paper titles

---work on the 'cite' feature
---the contact buttons should be mirror




import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Archives from "./pages/Archives";

import Paper1 from "./pages/papers/Paper1";
import Paper2 from "./pages/papers/Paper2";
import Paper3 from "./pages/papers/Paper3";

function App() {
  const location = useLocation();

  // Change browser tab title based on the current page
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Home - GCU";
    } else if (location.pathname === "/archives") {
      document.title = "Journal - GCU";
    } else if (location.pathname === "/papers/paper-1") {
      document.title = "Journal - GCU";
    } else if (location.pathname === "/papers/paper-2") {
      document.title = "Journal - GCU";
    } else if (location.pathname === "/papers/paper-3") {
      document.title = "Journal - GCU";
    } else {
      document.title = "Journal - GCU";
    }
  }, [location.pathname]);

  // Hide Header and Footer on the Home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">

      {/* Header appears on every page except Home */}
      {!isHomePage && <Header />}

      <main>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Archives */}
          <Route path="/archives" element={<Archives />} />

          {/* Research Papers */}
          <Route
            path="/papers/paper-1"
            element={<Paper1 />}
          />

          <Route
            path="/papers/paper-2"
            element={<Paper2 />}
          />

          <Route
            path="/papers/paper-3"
            element={<Paper3 />}
          />

        </Routes>
      </main>

      {/* Footer appears on every page except Home */}
      {!isHomePage && <Footer />}

    </div>
  );
}

export default App;







    --theme-color: #017F7B;
    --theme-color2: #FCD374;you w
    --theme-color3: #FCD374;
    --title-color: #003130;
    --body-color: #4d5765;
    --smoke-color: #f3f7fb;
    --black-color: #000000;
    --white-color: #ffffff;
    --light-color: #72849b;
    --yellow-color: #ffb539;
    --success-color: #28a745;
    --error-color: #dc3545;
    --border-color: #ecf1f9;
    --title-font: "Jost", sans-serif;
    --body-font: "Gabarito", sans-serif;
    --icon-font: "Font Awesome 6 Pro";
    --main-container: 1380px;
    --container-gutters: 24px;
    --section-space: 60px;
    --section-space-mobile: 40px;
    --section-title-space: 70px;
    --ripple-ani-duration: 5s;
}

    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-font-sans-serif: sys