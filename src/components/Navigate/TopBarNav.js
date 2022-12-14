import { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/userContext";

export const TopBarNav = () => {

    const { user } = useContext(UserContext)

    const clearActivePage = () => {
        let linkElements = document.querySelectorAll('.nav-item');
        linkElements.forEach(x => {
            if (x.classList.contains('active')) {
                x.classList.remove('active')
            }
        })
    }
    return (
        <div className="container-fluid bg-primary py-3 d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0" onClick={clearActivePage}>
                        <div className="d-inline-flex align-items-center">
                            {user.email && <p className="text-white px-3 mt-3" style={{textDecoration:"none"}}>
                                {user.email}
                            </p>}

                            {!user.email
                                ? <div>
                                    <Link className="text-white px-3" to="/login">
                                        Login
                                    </Link>
                                    <span className="text-white">|</span>
                                    <Link className="text-white px-3" to="/register" onClick={clearActivePage}>
                                        Register
                                    </Link>
                                </div>
                                : <div>
                                    <Link className="text-white px-3" to="/logout" onClick={clearActivePage}>
                                        Logout
                                    </Link>
                                    <Link to="/cart" className="text-white px-3">
                                        <i className="fa fa-shopping-cart"></i>
                                    </Link>
                                </div>}
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-white px-3" href="https://www.facebook.com/Stanimir.Reshavski" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-white px-3" href="https://twitter.com/stReshavski" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-white px-3" href="https://www.instagram.com/stanimir.reshavski/" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}