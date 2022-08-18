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
                            <Link className="text-white px-3" to="/contacts" onClick={clearActivePage}>
                                Contacts
                            </Link>
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
                                : <Link className="text-white px-3" to="/logout" onClick={clearActivePage}>
                                    Logout
                                </Link>}
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