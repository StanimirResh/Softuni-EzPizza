import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div
            className="container-fluid footer bg-light py-5"
            style={{ marginTop: 90 }}
        >
            <div className="container text-center py-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <a href="index.html" className="navbar-brand m-0">
                            <h1 className="m-0 mt-n2 display-4 text-primary">
                                <span className="text-secondary">Ez</span>Pizza
                            </h1>
                        </a>
                    </div>
                    <div className="col-12 mb-4">
                        <a className="btn btn-outline-secondary btn-social mr-2" href="https://www.facebook.com/Stanimir.Reshavski" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-outline-secondary btn-social mr-2" href="https://twitter.com/stReshavski" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-outline-secondary btn-social" href="https://www.instagram.com/stanimir.reshavski/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                    <div className="col-12 mt-2 mb-4">
                        <div className="row">
                            <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                                <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                                <p className="mb-2">Bul. Vitosha 100, Sofia, Bulgaria</p>
                                <p className="mb-0">+359 9888 1Pizza</p>
                            </div>
                            <div className="col-sm-6 text-center text-sm-left">
                                <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                                <p className="mb-2">Tue – Sun, 10AM – 10PM</p>
                                <p className="mb-0">Monday: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className="m-0">
                            © <Link to="/"></Link>. All Rights Reserved. Designed by {"Stanimir Reshavski"} using
                            <a target="_blank" href="https://htmlcodex.com" rel="noreferrer"> HTML Codex</a>
                        </p>
                    </div>
                </div>
            </div>
        </div >



    )
}