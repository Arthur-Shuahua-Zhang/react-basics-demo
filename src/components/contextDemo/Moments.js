import Profile from "./Profile"
import RecentPosts from "./RecentPosts"
import { AuthorContext } from "./AuthorContext"
import { useContext } from "react"

export default function Moments() {

    const context = useContext(AuthorContext);

    return (
        <div>
            <AuthorContext.Provider value={context}>
                <Profile />
                <hr />
                <RecentPosts />
            </AuthorContext.Provider>

        </div>
    )
}