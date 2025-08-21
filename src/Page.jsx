import React from 'react';
 
function Page({ selected }) {
    if (selected) {
 
        return (
            <>
                {/* SCP Page (larger content) */}
                <main className="text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
                    <h2 className='text-uppercase'>{selected.name}</h2>
                    <h3 className="text-muted"> Object Class: {selected.class}</h3>
                    <h4>Description</h4>
                    <p>{selected.description}</p>
                    <h4>Containment Procedures</h4>
                    <p>{selected.containment}</p>
                </main>
            </>
        );
    }
    else {
        return (
            <>
                {/* 404 Page */}
      <main className="text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <h1>We4come t0 SCP DAT4</h1>
        <p className="lead">SCP-404 was not contained </p>
      </main>
            
            </>
        );
    }
}
export default Page;