function  Page(props) {
    if (props) {
        const name = props.name;
        const classObj=props.class;
        const description = props.description;
        const containment = props.containment;
        return (
            <>
                {/* SCP Page (larger content) */}
                <main className="text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
                    <h1>{name}</h1>
                    <h2 className="text-muted">{classObj}</h2>
                    <h3>Description</h3>
                    <p className="lead">{description}</p>
                    <h3>Containment Procedures</h3>
                    <p>{containment}</p>
                </main>
            </>
        );
    }
    else {
        return (
            <>
                {/* Index Page (smaller content) */}
      <main className="text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <h1>Welcome to SCP DATA</h1>
        <p className="lead">Explore classified SCP documentation.</p>
      </main>
            
            </>
        );
    }
}
export default Page;