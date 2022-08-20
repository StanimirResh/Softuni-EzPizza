import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as pizzaService from "../../../services/pizzaService"

export const Create = (props) => {
    const dbName = props.database
    const { pizzaId } = useParams();

    const [ingridients, setIngridients] = useState([])

    const [pizza, setPizza] = useState({
        name: "",
        price: "",
        imageUrl: "",
        ingridients: [],
        summary: ""
    })

    const [errors, setErrors] = useState({
        name: false,
        price: false,
        imageUrl: false,
        ingridients: false,
        summary: false,
        invalid: false
    })

    const navigate = useNavigate();

    useEffect(() => {
        pizzaService.getIngridients()
            .then(result => {
                setIngridients(result)
            })
    }, [dbName, pizzaId])

    const changeHandler = (e) => {
        setPizza(oldPizza => ({
            ...oldPizza,
            [e.target.name]: e.target.value
        }))
    }

    const checkChangeHandler = (e) => {
        if (pizza.ingridients.includes(e.target.name)) {
            setPizza(oldPizza => ({
                ...oldPizza,
                ingridients: oldPizza.ingridients.filter(x => x !== e.target.name)
            }))
        } else {
            setPizza(oldPizza => ({
                ...oldPizza,
                ingridients: [...oldPizza.ingridients, e.target.name]
            }))
        }
    }

    const errorHandler = (e) => {
        if (ingridients.includes(e.target.name)) {
            if (pizza.ingridients.length > 2) {
                setErrors(oldErrors => ({
                    ...oldErrors,
                    ingridients: false
                }))
            } else {
                setErrors(oldErrors => ({
                    ...oldErrors,
                    ingridients: true
                }))
            }
        } else {
            if (e.target.name === "price") {
                if (pizza[e.target.name].length <= 1) {
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
            } else if (e.target.name === "imageUrl") {
                if (pizza[e.target.name].length <= 8) {
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
            } else if (pizza[e.target.name]?.length <= 2) {
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
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!isNaN(pizza.price)) {
            setPizza(oldPizza => ({
                ...oldPizza,
                price: Number(oldPizza.price)
            }))
            pizzaService.create(dbName, pizza)
                .then(result => {
                    setErrors(oldErrors => ({
                        ...oldErrors,
                        invalid: false
                    }))
                    navigate(`/menu/${dbName}`)
                })
        } else {
            setErrors(oldErrors => ({
                ...oldErrors,
                invalid: true
            }))
        }

    }

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">
                            Edit Your Pizza
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="contact-form bg-primary rounded p-5">
                            <div id="success" />
                            <form name="sentMessage" id="contactForm" onSubmit={submitHandler}>
                                <div className="form-row">
                                    <div className="col-sm-6 control-group">
                                        <label htmlFor="name" className="ml-2">Pizza Name</label>
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            name="name"
                                            placeholder="Pizza Name"
                                            value={pizza.name}
                                            onChange={changeHandler}
                                            onBlur={errorHandler}
                                        />
                                        <p className="help-block text-danger">
                                            {errors.name ? "Name of pizza has to be longer than two symbols"
                                                : ""}
                                        </p>
                                    </div>
                                    <div className="col-sm-6 control-group">
                                        <label htmlFor="price" className="ml-2">Pizza Price</label>
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            name="price"
                                            placeholder="Price"
                                            value={pizza.price}
                                            onChange={changeHandler}
                                            onBlur={errorHandler}
                                        />
                                        <p className="help-block text-danger">
                                            {errors.price
                                                ? `Price of pizza has to be longer than 1 symbol (ex 8.00)`
                                                : ""}
                                        </p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label htmlFor="imageUrl" className="ml-2">Image for Pizza</label>
                                    <input
                                        type="text"
                                        className="form-control p-4"
                                        name="imageUrl"
                                        placeholder="Image Url"
                                        value={pizza.imageUrl}
                                        onChange={changeHandler}
                                        onBlur={errorHandler}

                                    />
                                    <p className="help-block text-danger">
                                        {errors.imageUrl
                                            ? `ImageUrl has to be longer than 8 symbols`
                                            : ""}
                                    </p>
                                </div>
                                <div className="justify-content-center text-center">
                                    <h4>Ingridients</h4>
                                </div>
                                {ingridients?.map((x, i) =>
                                    <div key={i} className="control-group flex"
                                        style={{ display: "inline-flex", width: 200 }}>
                                        <input
                                            type="checkbox"
                                            className="form-control mr-2"
                                            style={{ width: 20, height: 20 }}
                                            name={x}
                                            data="ingridients"
                                            checked={pizza.ingridients.includes(x) ? "on" : false}
                                            onChange={checkChangeHandler}
                                            onBlur={errorHandler}
                                        />
                                        <label htmlFor={x} className="mr-2">{x}</label>
                                    </div>
                                )}
                                <p className="help-block text-danger">
                                    {errors.ingridients
                                        ? `You need to select at least 3 ingridients`
                                        : ""}
                                </p>
                                <div className="control-group">
                                    <textarea
                                        className="form-control p-4"
                                        rows={6}
                                        name="summary"
                                        placeholder="Summary"
                                        value={pizza.summary}
                                        onChange={changeHandler}
                                        onBlur={errorHandler}
                                    />
                                    <p className="help-block text-danger">
                                        {errors.summary
                                            ? `Summary has to be longer than 2 symbols`
                                            : ""}
                                    </p>

                                </div>
                                <div>
                                    <button
                                        className="btn btn-secondary btn-block py-3 px-5"
                                        type="submit"
                                        disabled={(errors.name ||
                                            errors.price ||
                                            errors.imageUrl ||
                                            errors.ingridients ||
                                            errors.summary) ? true : false}
                                    >
                                        Create
                                    </button>
                                    <p className="help-block text-danger">
                                        {errors.invalid
                                            ? `Some data was invalid! (Make sure price is a number!)`
                                            : ""}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}