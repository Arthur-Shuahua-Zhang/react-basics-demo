import {useState} from 'react'
import withCounter from './withCounter';

function HoverIncrease(props) {
    const [fontSize, setFontSize] = useState(10);
    const {count, handleCounter} = props


    return (
        <div>
            <button onMouseOver={() => setFontSize(fontSize + 1)}>increase font size by click</button>
            <p style={{fontSize}}>The current font size is {fontSize}</p>
            <p>the secretWord is {props.secretWord}</p>
            <button onClick={handleCounter}> + </button>
            <p>The current count is {count}</p>
        </div>
    )
}

export default withCounter(HoverIncrease, 10);