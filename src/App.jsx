// App.js (or any main component in your React app)
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Nav.jsx";
import Page from "./Page.jsx";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar and Routes */}
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/scp/:id" element={<PageWrapper />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-dark text-light text-center py-3">
          <small>&copy; 2025 SCP Foundation</small>
        </footer>
      </div>
    </Router>
  );
}

function PageWrapper() {
  const location = useLocation();
  const scp = location.state;

  return (
    <Page
      name={scp.name}
      class={scp.class}
      description={scp.description}
      containment={scp.containment}
    />
  );
}

export default App;
