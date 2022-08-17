import { Link } from "react-router-dom"

export const Navigation = () => {

    const setActivePage = (e) => {
        let linkElements = document.querySelectorAll('.nav-item');
        linkElements.forEach(x => {
            if (x.classList.contains('active')) {
                x.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    }

    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/" className="nav-item nav-link active" onClick={setActivePage}>
                                Home
                            </Link>
                            <Link to="/" className="nav-item nav-link" onClick={setActivePage}>
                                Our Pizzas
                            </Link>
                        </div>
                        <Link to="/" className="navbar-brand mx-5 d-none d-lg-block" onClick={setActivePage}>
                            <h1 className="m-0 display-4 text-primary">
                                <span className="text-secondary">EZ</span>PIZZA
                            </h1>
                        </Link>
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link" onClick={setActivePage}>
                                Your Pizzas
                            </Link>
                            <Link to="/about" className="nav-item nav-link" onClick={setActivePage}>
                                About
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}