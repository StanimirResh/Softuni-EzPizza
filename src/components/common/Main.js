import { Home } from "../Home/Home"
import { Routes, Route } from 'react-router-dom'

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
            </Routes>
        </main>
    )
}