import { Link } from "react-router-dom";

export const Home = () => {
    const clickHandler = (e, page) => {
        let linkElements = document.querySelectorAll(".nav-item");
        linkElements.forEach((x) => {
            x.innerText === page
                ? x.classList.add("active")
                : x.classList.remove("active");
        });
    };
    return (
        <div className="container-fluid p-0">
            <div
                id="header-carousel"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="w-100 h-100"
                            src="https://thumbs.dreamstime.com/b/vegetarian-pizza-table-cafe-close-up-blured-background-vegetarian-pizza-table-cafe-close-up-183676150.jpg"
                            alt="img"
                        />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: 900 }}>
                                <h4 className="text-white text-uppercase mb-md-3">
                                    Easy &amp; Traditional
                                </h4>
                                <h1 className="display-3 text-white mb-md-4">
                                    Easy And Traditional Pizzas Since 2003
                                </h1>
                                <Link
                                    onClick={(e) =>
                                        clickHandler(e, "Our Pizzas")
                                    }
                                    to="/menu/basic-pizzas"
                                    className="btn btn-primary py-md-3 px-md-5 mt-2"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-100 h-100"
                            src="https://img.freepik.com/free-photo/hawaiian-pizza-with-pineappleham-cheese-black-slate-background_123827-20955.jpg?w=2000"
                            alt="img"
                        />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: 900 }}>
                                <h4 className="text-white text-uppercase mb-md-3">
                                    Easy &amp; Untraditional
                                </h4>
                                <h1 className="display-3 text-white mb-md-4">
                                    Pizzas with YOUR own twist
                                </h1>
                                <Link
                                    onClick={(e) =>
                                        clickHandler(e, "Your Pizzas")
                                    }
                                    to="/menu/community-pizzas"
                                    className="btn btn-primary py-md-3 px-md-5 mt-2"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#header-carousel"
                    data-slide="prev"
                >
                    <div
                        className="btn btn-secondary px-0"
                        style={{ width: 45, height: 45 }}
                    >
                        <span className="carousel-control-prev-icon mb-n1" />
                    </div>
                </a>
                <a
                    className="carousel-control-next"
                    href="#header-carousel"
                    data-slide="next"
                >
                    <div
                        className="btn btn-secondary px-0"
                        style={{ width: 45, height: 45 }}
                    >
                        <span className="carousel-control-next-icon mb-n1" />
                    </div>
                </a>
            </div>
        </div>
    );
};
