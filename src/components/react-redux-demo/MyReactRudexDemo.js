import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement } from './actions';
import { useEffect } from 'react';


export default function MyReactReduxDemo() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    useEffect(() => {
        if (counter > 5) {
            dispatch({type: "SIGN_IN"});
        }
    }, [counter])


    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(2))}> + </button>
            <button onClick={() => dispatch(decrement(1))}> - </button>

            {isLogged? <h3>secret message for login</h3>: ''}
        </div>
    )


}