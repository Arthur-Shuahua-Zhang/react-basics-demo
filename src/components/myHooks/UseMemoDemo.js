import { useState, useMemo } from 'react';


const UseMemoDemo = () => {

    const [count, setCount] = useState(1);
    const [todos, setTodos] = useState([]);
    

    const increment = () => {
        setCount(c => c + 1);
    }

    const addTodo = () => {
        setTodos(t => [...t, "new todo item"]);
    }

    const expensiveCalculation = (num) => {
        console.log('calculating ......');
        for (let i=0; i<1000000000; i++) {
            num +=1
        }
        return num;
    }

    const calculation = useMemo(() => expensiveCalculation(count), [count]);


    return (
        <div>
            <h2>My Todo List</h2>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}> Add Todo into list</button>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}> + </button>
            </div>
            <h2>expensive calculation</h2>
            {calculation}
        </div>
    )

}

export default UseMemoDemo;