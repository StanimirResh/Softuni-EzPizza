import { Home } from "../Home/Home"
import { Routes, Route } from 'react-router-dom'
import { About } from '../About/About.js'
import { Login } from "../User/Login"
import { Register } from "../User/Register"
import { Contacts } from "../Contacts/Contacts"
import { Menu } from "../Menu/Menu"
import { Details } from "../Menu/Details/Details.js"
import { Logout } from "../User/Logout"

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/menu/basic-pizzas" element={<Menu database="basic-pizzas"/>} />
                <Route path="/menu/community-pizzas" element={<Menu database="community-pizzas"/>} />
                <Route path="/menu/basic-pizzas/:pizzaId" element={<Details database="basic-pizzas"/>} />
                <Route path="/menu/community-pizzas/:pizzaId" element={<Details database="community-pizzas"/>} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </main>
    )
}