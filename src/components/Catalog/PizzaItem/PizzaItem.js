export const PizzaItem = () => {
    return (
        <div className="owl-item cloned m-1" style={{ width: 350, marginRight: 30 }}>
            <div className="service-item">
                <div className="service-img mx-auto">
                    <img
                        alt="imgpizzaz"
                        className="rounded-circle w-100 h-100 bg-light p-3"
                        src="img/service-3.jpg"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div
                    className="position-relative text-center bg-light rounded p-4 pb-5"
                    style={{ marginTop: "-75px" }}
                >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                        Celebration Ice Cream
                    </h5>
                    <p>
                        Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo
                        stet kasd justo
                    </p>
                    <a
                        href="#test"
                        className="border-bottom border-secondary text-decoration-none text-secondary"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    )
}