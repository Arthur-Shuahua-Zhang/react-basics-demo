import store from "./Store"
import {useState} from 'react'

export const MyBasicReduxCounterFn = () => {
    const [ ,update] = useState(false);

    return (
        <div>
            <h1>My Basic Redux Counter</h1>
            <h1>Counter: {store.getState().value}</h1>

            <button onClick={() => {
                store.dispatch({ type: 'counter/incremented' })
                console.log('after dispatch increment action', store.getState());
                update(pre => !pre);
            }}> + </button>
            <button onClick={() => {
                store.dispatch({ type: 'counter/decremented' })
                console.log('after dispatch decrement action', store.getState());
                update(pre => !pre);
            }}> - </button>
        </div>
    )
}