import { Home } from "../Home/Home"
import { Routes, Route } from 'react-router-dom'
import { About } from '../About/About.js'
import { Login } from "../User/Login"
import { Register } from "../User/Register"
import { Contacts } from "../Contacts/Contacts"
import { BasicPizzas } from "../Catalog/BasicPizzas"

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/catalog/basic-pizzas" element={<BasicPizzas />} />
            </Routes>
        </main>
    )
}