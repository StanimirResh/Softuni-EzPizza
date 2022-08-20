import { Home } from "../Home/Home"
import { Routes, Route } from 'react-router-dom'
import { About } from '../About/About.js'
import { Login } from "../User/Login"
import { Register } from "../User/Register"
import { Contacts } from "../Contacts/Contacts"
import { Menu } from "../Menu/Menu"
import { Details } from "../Menu/Details/Details.js"
import { Logout } from "../User/Logout"
import { Cart } from "../Cart/Cart"
import { Edit } from "../Menu/Details/Edit/Edit"
import { Create } from "../Menu/Create/Create"
import { Delete } from "../Menu/Details/Delete/Delete"

export const Main = () => {
    const communityDb = 'community-pizzas'
    const basicDb = 'basic-pizzas'
    return (
        <main>
            {/* Tried using context instead of giving each component seperately which db to use but
            the <Routes> component only accepts <Route> children. Didnt find another workaround for it */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/menu/basic-pizzas" element={<Menu database={basicDb} />} />
                <Route path="/menu/basic-pizzas/:pizzaId" element={<Details database={basicDb} />} />
                <Route path="/menu/basic-pizzas/:pizzaId/edit" element={<Edit database={basicDb} />} />
                <Route path="/menu/basic-pizzas/:pizzaId/delete" element={<Delete database={basicDb} />} />
                <Route path="/menu/basic-pizzas/create" element={<Create database={basicDb} />} />
                <Route path="/menu/community-pizzas" element={<Menu database={communityDb} />} />
                <Route path="/menu/community-pizzas/:pizzaId" element={<Details database={communityDb} />} />
                <Route path="/menu/community-pizzas/:pizzaId/edit" element={<Edit database={communityDb} />} />
                <Route path="/menu/community-pizzas/:pizzaId/delete" element={<Delete database={communityDb} />} />
                <Route path="/menu/community-pizzas/create" element={<Create database={communityDb} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </main>
    )
}