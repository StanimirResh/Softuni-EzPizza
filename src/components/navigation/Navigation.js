import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <Link to="/" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary">
                            <span className="text-secondary">EZ</span>PIZZA
                        </h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/" className="nav-item nav-link active">
                                Home
                            </Link>
                            <Link to="/" className="nav-item nav-link">
                                Our Pizzas
                            </Link>
                        </div>
                        <Link to="/" className="navbar-brand mx-5 d-none d-lg-block">
                            <h1 className="m-0 display-4 text-primary">
                                <span className="text-secondary">EZ</span>PIZZA
                            </h1>
                        </Link>
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link">
                                Your Pizzas
                            </Link>
                            <Link to="/" className="nav-item nav-link">
                                Restaurants
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}