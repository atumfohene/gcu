import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Archives from "./pages/Archives";

import Paper1 from "./pages/papers/Paper1";
import Paper2 from "./pages/papers/Paper2";
import Paper3 from "./pages/papers/Paper3";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/archives" element={<Archives />} />

          <Route path="/papers/paper-1" element={<Paper1 />} />
          <Route path="/papers/paper-2" element={<Paper2 />} />
          <Route path="/papers/paper-3" element={<Paper3 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;