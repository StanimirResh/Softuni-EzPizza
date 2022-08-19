import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as pizzaService from "../../../../services/pizzaService"
export const Edit = (props) => {
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

    const navigate = useNavigate();
    useEffect(() => {
        pizzaService.getIngridients()
            .then(result => {
                setIngridients(result)
            })

        pizzaService.getOne(dbName, pizzaId)
            .then(result => {
                setPizza(result)
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

    const submitHandler = (e) => {
        e.preventDefault()

        pizzaService.edit(dbName, pizzaId, pizza)
            .then(result => {
                navigate(`/menu/${dbName}/${result._id}`)
            })
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
                                        />
                                        <p className="help-block text-danger" />
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
                                        />
                                        <p className="help-block text-danger" />
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

                                    />
                                    <p className="help-block text-danger" />
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
                                            checked={pizza.ingridients.includes(x) ? "on" : false}
                                            onChange={checkChangeHandler}
                                        />
                                        <label htmlFor={x} className="mr-2">{x}</label>
                                    </div>
                                )}

                                <div className="control-group">
                                    <textarea
                                        className="form-control p-4"
                                        rows={6}
                                        name="summary"
                                        placeholder="Summary"
                                        value={pizza.summary}
                                        onChange={changeHandler}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div>
                                    <button
                                        className="btn btn-secondary btn-block py-3 px-5"
                                        type="submit"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}