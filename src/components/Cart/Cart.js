
export const Cart = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="contact-form bg-primary rounded p-5">
                            <div className="container-fluid my-5 py-5 px-0">
                                <div className="row bg-light m-0">
                                    <div className="col-md-6 px-0" style={{ maxHeight: 500 }}>
                                        <div className="position-relative h-100 justify-content-center align-middle">
                                            <img
                                                className="position-absolute w-75 h-100"
                                                src="https://cookieandkate.com/images/2021/07/margherita-pizza-recipe-1-2-768x1155.jpg"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 py-5 py-md-0 px-0">
                                        <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                            <div
                                                className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                                                style={{ width: 100, height: 100 }}
                                            >
                                                <h3 className="font-weight-bold text-secondary mb-0">$15.00</h3>
                                            </div>
                                            <h3 className="font-weight-bold text-black mt-3 mb-4">
                                                Cool Pizza
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}