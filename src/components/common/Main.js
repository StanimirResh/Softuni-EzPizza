import { Introduction } from "../Home/Introduction"
import { Navigation } from "../navigation/Navigation"
import { TopBarNav } from "../navigation/TopBarNav"

export const Main = () => {
    return (
        <>
            <TopBarNav />
            <Navigation />
            <Introduction />
        </>
    )
}