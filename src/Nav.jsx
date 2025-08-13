import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [scpData, setScpData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mykzeman/SCP-Subject-Files-v2/main/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setScpData(data))
            .catch(error => console.error('Fetch failed:', error));
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">SCP DATA</a>
            </nav>

            {/* Render fetched data as links */}
            <ul>
                {scpData.map((scp, index) => (
                    <li key={index}>
                        <Link to={`/scp/${index}`} state={scp}>
                            {scp.name || `SCP-${index}`}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Nav;