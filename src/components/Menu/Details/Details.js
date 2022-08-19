import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as pizzaService from "../../../services/pizzaService"

export const Details = (props) => {
    const { pizzaId } = useParams();

    const [pizza, setPizza] = useState({});
    const dbName = props.database

    useEffect(() => {
        pizzaService.getOne(dbName, pizzaId)
            .then(result => setPizza(result))
    },[dbName, pizzaId])

    return (
        <div className="container-fluid my-5 py-5 px-0">
            <div className="row bg-primary m-0">
                <div className="col-md-6 px-0" style={{ minHeight: 500 }}>
                    <div className="position-relative h-100">
                        <img
                            className="position-absolute w-100 h-100"
                            src={pizza.imageUrl}
                            style={{ objectFit: "cover" }}
                            alt="img"
                        />
                        <span />
                    </div>
                </div>
                <div className="col-md-6 py-5 py-md-0 px-0">
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <div
                            className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{ width: 100, height: 100 }}
                        >
                            <h3 className="font-weight-bold text-secondary mb-0">${pizza.price?.toFixed(2)}</h3>
                        </div>
                        <h3 className="font-weight-bold text-white mt-3 mb-4">
                            {pizza.name}
                        </h3>
                        <p className="text-white mb-4">
                            {pizza.summary}
                        </p>
                        <p className="text-white mb-4">
                            {pizza.ingridients?.map(x => <span key={x}>{x}, </span>)}
                        </p>
                        <a href="/" className="btn btn-secondary py-3 px-5 mt-2">
                            Order Now
                        </a>
                    </div>
                </div>
            </div>
        </div >

    )
}