import { useState, useEffect } from 'react'


export default function InitUserInfoComponent(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(()=>{
        console.log(data)
    },[data])

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        // console.log('json', json)
        setData(json);
        // console.log('data', data);
    }

    

    return (
        <div>
            <h1>init the users data</h1>
            <ul>
                {data.map((user => (
                    <li key={user.id}>{user.name}</li>
                )))}
            </ul>

        </div>
    )
}