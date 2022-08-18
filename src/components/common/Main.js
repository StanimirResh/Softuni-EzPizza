import { Home } from "../Home/Home"
import { Routes, Route } from 'react-router-dom'
import { About } from '../About/About.js'
import { Login } from "../User/Login"
import { Register } from "../User/Register"
import { Contacts } from "../Contacts/Contacts"
import { BasicPizzas } from "../Menu/BasicPizzas"
import { Details } from "../Menu/Details"
import { Logout } from "../User/Logout"
import { CommunityPizzas } from "../Menu/CommunityPizzas"

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/menu/basic-pizzas" element={<BasicPizzas />} />
                <Route path="/menu/community-pizzas" element={<CommunityPizzas />} />
                <Route path="/menu/basic-pizzas/:pizzaId" element={<Details />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </main>
    )
}