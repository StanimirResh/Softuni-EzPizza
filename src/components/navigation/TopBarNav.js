import { Link } from "react-router-dom"

export const TopBarNav = () => {
    return (
        <div className="container-fluid bg-primary py-3 d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <Link className="text-white px-3" to="/">
                                Login
                            </Link>
                            <span className="text-white">|</span>
                            <Link className="text-white px-3" to="/">
                                Register
                            </Link>
                            <span className="text-white">|</span>
                            <Link className="text-white px-3" to="/">
                                Contacts
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <Link className="text-white px-3" to="/">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link className="text-white px-3" to="/">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link className="text-white px-3" to="/">
                                <i className="fab fa-linkedin-in" />
                            </Link>
                            <Link className="text-white px-3" to="/">
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link className="text-white pl-3" to="/">
                                <i className="fab fa-youtube" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}