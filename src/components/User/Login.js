import { Link } from "react-router-dom"
import "./User.css"

export const Login = () => {
    return (
        <div className="container">
            {/* <img src="https://st3.depositphotos.com/3308451/33422/i/1600/depositphotos_334221956-stock-photo-family-baby-having-pizza-party.jpg"
                alt="background-img"
                className="w-100 h-100" /> */}
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card my-5 ">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h1 class="section-title position-relative text-center mb-5">Login</h1>
                            </div>
                        </div>
                        <form className="card-body cardbody-color p-lg-5">
                            <div className="text-center">
                                <img
                                    src="https://i.ibb.co/jwky4xb/EZPIZZALOGOFINAL.png"
                                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                    width="200px"
                                    alt="profile"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Username"
                                    aria-describedby="emailHelp"
                                    placeholder="User Name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="password"
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                                    Login
                                </button>
                            </div>
                            <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                                Not Registered?{" "}
                                <Link to="/register" className="text-dark fw-bold">
                                    {" "}
                                    Create an Account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}