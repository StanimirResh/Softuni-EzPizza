import { PizzaItem } from "./PizzaItem/PizzaItem"
import * as pizzaService from "../../services/pizzaService";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
export const CommunityPizzas = () => {
    const [pizzas, setPizzas] = useState([])
    const dbName = 'communityPizzas'
    useEffect(() => {
        pizzaService.getAll(dbName)
            .then(result => {
                setPizzas(result);
            })
    }, [])

    return (
        <div className="container-fluid py-5">
                <div class="col-12 text-center">
                    <a href="/" class="btn btn-primary py-3 px-5">CREATE</a>
                </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">
                            Your own creations!
                        </h1>
                    </div>
                </div>
                <div className="row">
                    {(pizzas.length > 0)
                    ? pizzas.map(x => <PizzaItem key={x._id} pizza={x} />)
                    : <div className="container row justify-content-center"><h3 >Loading...</h3></div>}
                </div>
            </div>
        </div>
    )
}