import {useState} from 'react'

export default function withCounter(OldComponent, increment) {
 
    function NewComponent(props) {
        const [count, setCount] = useState(0);

        console.log("secretWord", props.secretWord);

        const handleCount = () => {
            setCount(count + increment);
        }
        return <OldComponent count={count} handleCounter={handleCount} {...props}/>
    }
    return NewComponent;
}