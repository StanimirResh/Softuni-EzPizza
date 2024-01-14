import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/userContext"
import * as userService from '../../services/userService'
import './User.css'
export const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        invalid: false
    })

    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const changeHandler = (e) => {
        setUserData(oldUserData => ({
            ...oldUserData,
            [e.target.name]: e.target.value
        }))
    }

    const errorHandler = (e) => {
        if (userData[e.target.name].length <= 3) {
            setErrors(oldErrors => ({
                ...oldErrors,
                [e.target.name]: true
            }))
        } else {
            setErrors(oldErrors => ({
                ...oldErrors,
                [e.target.name]: false
            }))
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        userService.login(userData.email, userData.password)
            .then(result => {
                setErrors(oldErrors => ({
                    ...oldErrors,
                    invalid: false
                }))
                userLogin(result)
                navigate('/')
            })
            .catch(() => {
                setErrors(oldErrors => ({
                    ...oldErrors,
                    invalid: true
                }))
            })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card my-5 ">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative text-center mb-5">Login</h1>
                            </div>
                        </div>
                        <form className="card-body cardbody-color p-lg-5" onSubmit={submitHandler}>
                            <div className="text-center">
                                <img
                                    src="https://i.ibb.co/SyBCXJg/EZPIZZALOGOFINAL.png"
                                    className="img-fluid logo-image-pic img-thumbnail rounded-circle my-3"
                                    width="200px"
                                    alt="profile"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Your Email"
                                    value={userData.email}
                                    onChange={changeHandler}
                                    onBlur={errorHandler}
                                />
                                {errors.email && <p className="text-black mt-3 mb-4">Your Email has to be longer than 3 characters</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Your Password"
                                    value={userData.password}
                                    onChange={changeHandler}
                                    onBlur={errorHandler}
                                />
                                {errors.password && <p className="text-black mt-3 mb-4">Password has to be longer than 3 characters</p>}
                                {errors.invalid && <p className="text-black mt-3 mb-4">Invalid email or password</p>}

                            </div>
                            <div className="text-center">

                                <button
                                    id="btn"
                                    type="submit"
                                    className="btn btn-color px-5 mb-5 w-100"
                                    disabled={(errors.email || errors.password) ? true : false}
                                >
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
            </div >
        </div >
    )
}