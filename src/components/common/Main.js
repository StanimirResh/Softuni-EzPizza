import { Home } from "../Home/Home"
import { Navigation } from "../navigation/Navigation"
import { TopBarNav } from "../navigation/TopBarNav"

export const Main = () => {
    return (
        <>
            <TopBarNav />
            <Navigation />
            <Home />
        </>
    )
}