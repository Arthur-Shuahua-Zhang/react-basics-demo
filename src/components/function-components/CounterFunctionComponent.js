
import { useState } from 'react'

function CounterFunctionComponent(props) {
    const [count, setCount] = useState(6);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleMinus = function () {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter based on Functional Component</h1>
            <p>count: {count}</p>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleMinus}> - </button>
        </div>
    )
}

export default CounterFunctionComponent;