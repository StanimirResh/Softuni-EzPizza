import { useContext, useEffect, useState } from "react"
import { PizzaItem } from "./PizzaItem/PizzaItem"
import * as pizzaService from "../../services/pizzaService"
import { UserContext } from "../../contexts/userContext"
import { Link } from "react-router-dom"

export const Menu = (props) => {
    const dbName = props.database
    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        pizzaService.getAll(dbName)
            .then(result => {
                setPizzas(result);
            })
    }, [dbName])

    const { user } = useContext(UserContext);

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    {(user.email && dbName === 'community-pizzas')
                        ? <div className="col-12 text-center">
                            <Link to="/menu/community-pizzas/create" className="btn btn-primary py-3 px-5">Create</Link>
                        </div>
                        : null}
                    {((user.email === 'admin@abv.bg') && (dbName === 'basic-pizzas'))
                        ? <div className="col-12 text-center">
                            <Link to="/menu/basic-pizzas/create" className="btn btn-primary py-3 px-5">Create</Link>
                        </div>
                        : null
                    }


                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">
                            {(dbName === 'basic-pizzas')
                                ? "Our Best Traditional Pizzas On Good Prices"
                                : "Try Random People's Creations!"}
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