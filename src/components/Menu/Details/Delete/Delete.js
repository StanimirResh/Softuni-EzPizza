import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import * as pizzaService from "../../../../services/pizzaService"

export const Delete = (props) => {
    const navigate = useNavigate();
    const { pizzaId } = useParams();
    const dbName = props.database

    useEffect(() => {
        pizzaService.del(dbName, pizzaId)
            .then(result => {
                navigate(`/menu/${dbName}`)
            })
            .catch(err => {
                navigate(`/menu/${dbName}/${pizzaId}`)
            })
    })
}