// App.js (or any main component in your React app)
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Nav.jsx";
import Page from "./Page.jsx";
import { useEffect, useState } from "react";
function getData(){
 return fetch('https://raw.githubusercontent.com/mykzeman/SCP-Subject-Files-v2/main/data.json')
            .then(response => {
                if (!response) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
   
            .catch(error => console.error('Fetch failed:', error));
}
function App() {
  const [scps,setScps]=useState([])
  const [selected, setSelected]=useState(null)  

  useEffect(
    () => {
      getData()
    .then(data => setScps(data))
    },
    []
  );
  return (
    <>
    
     <div className="d-flex flex-column min-vh-100">
        {/* Navbar and Routes */}
      <Nav scps={scps} onselect={setSelected} />
                      {/* Index Page (smaller content) */}
      <main className="text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <h1>Welcome to SCP DATA</h1>
        <p className="lead">Explore classified SCP documentation.</p>
      </main>
      {selected && <Page selected={selected}/>}
        {/* Footer */}
        <footer className="bg-dark text-light text-center py-3">
          <small>&copy; 2025 SCP Foundation</small>
        </footer>
      </div>

    </>
  );     
}

export default App;
