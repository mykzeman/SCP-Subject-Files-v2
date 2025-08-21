function Nav({scps,onselect}) {
 return (
        <>
            {/* Navbar */}
            <nav className=" navbar-dark bg-dark">
                <a className="navbar-brand" href="/">SCP DATA</a>
                          {/* Render fetched data as links */}
            <ul className="d-flex flex-row justify-content-center list-unstyled mx-auto text-light">
                {scps.map((scp,i)=>(  <li key={i} onClick={()=>onselect(scp)} className="navbar-item text-uppercase mx-3"
                    >{scp.name}</li>)
                  
                )}
            </ul>
            </nav>

  
        </>
    );
}

export default Nav;