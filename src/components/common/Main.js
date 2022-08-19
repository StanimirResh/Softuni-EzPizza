import { Home } from "../Home/Home"
import { Routes, Route } from 'react-router-dom'
import { About } from '../About/About.js'
import { Login } from "../User/Login"
import { Register } from "../User/Register"
import { Contacts } from "../Contacts/Contacts"
import { BasicPizzas } from "../Menu/BasicPizzas/BasicPizzas"
import { BasicDetails } from "../Menu/BasicPizzas/BasicDetails/BasicDetails"
import { Logout } from "../User/Logout"
import { CommunityPizzas } from "../Menu/CommunityPizzas/CommunityPizzas"
import {CommunityDetails} from "../Menu/CommunityPizzas/CommunityDetails/CommunityDetails"

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
                <Route path="/menu/basic-pizzas/:pizzaId" element={<BasicDetails />} />
                <Route path="/menu/community-pizzas/:pizzaId" element={<CommunityDetails />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </main>
    )
}