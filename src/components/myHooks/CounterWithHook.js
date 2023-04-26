import useCountCustomHook from "./useCountCustomHook";


export function CounterWithHook(props) {
    const initOpt = {
        initVal: 100,
        increment: 2,
        decrement: 1
    }

    const [count, add, minus] = useCountCustomHook(initOpt);

    return (
        <div>
            <p>current count is {count}</p>
            <button onClick={add}> + </button>
            <button onClick={minus}> - </button>
        </div>
    )
}