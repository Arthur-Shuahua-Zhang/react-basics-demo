import { useContext } from "react"
import { AuthorContext } from "./AuthorContext";


export default function Profile() {

    const context = useContext(AuthorContext);

    return (
        <div>
            <h2>My Profile</h2>
            <p>The author is {context.name}</p>
        </div>
    )
}