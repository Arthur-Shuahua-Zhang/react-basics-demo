import React from 'react';

export default function UserList(props) {
    const userData = {
        name: "Jason Liu",
        age: 90,
        email: "jason.liu@example.com"
    }

    console.log(userData);
    const userDataArray = Object.entries(userData);
    console.log(userDataArray);


    return (
        <ul>
            {userDataArray.map(([k, v]) => 
                (
                    <li key={k}>
                        {k} : {v}
                    </li>
                )
            )}
        </ul>
    )
}