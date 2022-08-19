import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as pizzaService from "../../../../services/pizzaService"
export const Edit = (props) => {
    const dbName = props.database
    const { pizzaId } = useParams();
    const [ingridients, setIngridients] = useState([])
    const [pizza, setPizza] = useState({
        name:"",
        price:"",
        imageUrl:"",
        ingridients: [],
        summary: ""
    })

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
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                <div className="form-row">
                                    <div className="col-sm-6 control-group">
                                        <label htmlFor="name" className="ml-2">Pizza Name</label>
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            name="name"
                                            placeholder="Pizza Name"
                                            value={pizza.name}
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
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="justify-content-center text-center">
                                    <h4>Ingridients</h4>
                                </div>
                                {ingridients?.map(x =>
                                    <div className="control-group flex"
                                        style={{ display: "inline-flex", width: 200 }}>
                                        <input
                                            type="checkbox"
                                            className="form-control mr-2"
                                            style={{ width: 20, height: 20 }}
                                            name={x}
                                            checked={pizza.ingridients.includes(x) ? true : false}
                                        />
                                        <label htmlFor={x} className="mr-2">{x}</label>
                                    </div>
                                )}

                                <div className="control-group">
                                    <textarea
                                        className="form-control p-4"
                                        rows={6}
                                        name="message"
                                        placeholder="Summary"
                                        value={pizza.summary}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div>
                                    <button
                                        className="btn btn-secondary btn-block py-3 px-5"
                                        type="submit"
                                        id="sendMessageButton"
                                    >
                                        Send Message
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