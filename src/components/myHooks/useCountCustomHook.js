import {useState} from 'react'
const useCountCustomHook = (options = {
    initVal: 0,
    increment: 2,
    decrement: 1
}) => {

    const [count, setCount] = useState(options.initVal);

    const minus = () => {
        setCount(count - options.decrement);
    }
    const add = () => {
        setCount(count + options.increment);
    }

    return [count, add, minus];
}

export default useCountCustomHook;