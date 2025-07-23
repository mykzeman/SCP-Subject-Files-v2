// App.js (or any main component in your React app)
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">SCP DATA</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="index.html">Index</a></li>
            <li className="nav-item"><a className="nav-link" href="scp-002.html">SCP-002</a></li>
            <li className="nav-item"><a className="nav-link" href="scp-003.html">SCP-003</a></li>
            <li className="nav-item"><a className="nav-link" href="scp-004.html">SCP-004</a></li>
            <li className="nav-item"><a className="nav-link" href="scp-005.html">SCP-005</a></li>
            <li className="nav-item"><a className="nav-link" href="scp-006.html">SCP-006</a></li>
          </ul>
        </div>
      </nav>

      {/* Index Page (smaller content) */}
      <main className="text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <h1>Welcome to SCP DATA</h1>
        <p className="lead">Explore classified SCP documentation.</p>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <small>&copy; 2025 SCP Foundation </small>
      </footer>
    </div>
   
  );
}

export default App;
