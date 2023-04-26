import { useRef } from "react";

export default function UserRefDemo1() {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleButtonClick}>Focus on Input</button>
        </div>
    )
}