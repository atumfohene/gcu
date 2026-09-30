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
      document.title = "Journal - GRU";
    } else if (location.pathname === "/papers/paper-2") {
      document.title = "Journal - GRU";
    } else if (location.pathname === "/papers/paper-3") {
      document.title = "Journal - GRU";
    } else {
      document.title = "Journal - GRU";
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
            path="/doi/full/10.1155/2026/6624087"
            element={<Paper1 />}
          />

          <Route
            path="/doi/full/10.1155/2025/7612083"

            element={<Paper2 />}
          />

          <Route
            path="/doi/full/10.1155/2025/6636088"
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