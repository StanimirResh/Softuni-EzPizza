export const Introduction = () => {
    return (
        <div className="container-fluid p-0 mb-5 pb-5">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 h-1000" src="https://goguide.bg/wp-content/uploads/1588163529marco-guerrero-uuuXb8gkJKI-unsplash-scaled.jpg" alt="img" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: 900 }}>
                                <h4 className="text-white text-uppercase mb-md-3">
                                    Traditional &amp; Delicious
                                </h4>
                                <h1 className="display-3 text-white mb-md-4">
                                    Traditional Pizzas Since 1952
                                </h1>
                                <a href="testtest" className="btn btn-primary py-md-3 px-md-5 mt-2">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-2.jpg" alt="img" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: 900 }}>
                                <h4 className="text-white text-uppercase mb-md-3">
                                    Traditional &amp; Delicious
                                </h4>
                                <h1 className="display-3 text-white mb-md-4">
                                    Made From Organic Ingridients Only
                                </h1>
                                <a href="test" className="btn btn-primary py-md-3 px-md-5 mt-2">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#header-carousel"
                    data-slide="prev"
                >
                    <div className="btn btn-secondary px-0" style={{ width: 45, height: 45 }}>
                        <span className="carousel-control-prev-icon mb-n1" />
                    </div>
                </a>
                <a
                    className="carousel-control-next"
                    href="#header-carousel"
                    data-slide="next"
                >
                    <div className="btn btn-secondary px-0" style={{ width: 45, height: 45 }}>
                        <span className="carousel-control-next-icon mb-n1" />
                    </div>
                </a>
            </div>
        </div>

    )
}