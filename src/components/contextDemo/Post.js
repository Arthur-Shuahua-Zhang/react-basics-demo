import { useContext } from "react"
import { AuthorContext } from "./AuthorContext";

export default function Post({children}) {

    const context = useContext(AuthorContext);

    console.log(children);

    return (
        <div>
            <h3>{children.content}</h3>
            <p>created by {context.name}</p>
        </div>
    )
}