import { useState, useRef } from "react";


export default function UserRefDemo2() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(null);

    const handleButtonClick = () => {
        prevCountRef.current = count;
        setCount(count + 1);
    }

    const message = prevCountRef.current !== null && count > prevCountRef.current? `count increased from ${prevCountRef.current} to ${count}`: '';

    return (
        <div>
            <p>Count: {count}</p>
            <p>{message}</p>
            <button onClick={handleButtonClick}> increment </button>
        </div>
    )
}