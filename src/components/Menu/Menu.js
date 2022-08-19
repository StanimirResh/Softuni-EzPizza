import { useEffect, useState } from "react"
import { PizzaItem } from "./PizzaItem/PizzaItem"
import * as pizzaService from "../../services/pizzaService"

export const Menu = (props) => {
    const dbName = props.database
    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        pizzaService.getAll(dbName)
            .then(result => {
                setPizzas(result);
            })
    }, [dbName])

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">
                            Our Best Traditional Pizzas On Good Prices
                        </h1>
                    </div>
                </div>
                <div className="row">
                    {(pizzas.length > 0)
                        ? pizzas.map(x => <PizzaItem key={x._id} pizza={x} database={dbName} />)
                        : <div className="container row justify-content-center"><h3 >Loading...</h3></div>}
                </div>
            </div>
        </div>

    )
}