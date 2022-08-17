export const Navigation = () => {
    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary">
                            <span className="text-secondary">EZ</span>PIZZA
                        </h1>
                    </a>
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
                            <a href="index.html" className="nav-item nav-link active">
                                Home
                            </a>
                            <a href="product.html" className="nav-item nav-link">
                                Our Pizzas
                            </a>
                        </div>
                        <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                            <h1 className="m-0 display-4 text-primary">
                                <span className="text-secondary">EZ</span>PIZZA
                            </h1>
                        </a>
                        <div className="navbar-nav mr-auto py-0">
                            <a href="service.html" className="nav-item nav-link">
                                Your Pizzas
                            </a>
                            <a href="gallery.html" className="nav-item nav-link">
                                Restaurants
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}