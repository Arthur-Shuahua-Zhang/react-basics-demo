import { useState, useEffect } from 'react';
import UserProfile from './UserProfile';


export default function UsersComponent() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [delay, setDelay] = useState(0);
    const [lastLoadingTime, setLastLoadingTime] = useState("");
    const [error, setError] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData();
    }, [delay])

    const fetchData = async () => {

        try {
            let currentPage = 1;
            let totalPages = 1;
            while (currentPage <= totalPages) {
                const response = await fetch(`https://reqres.in/api/users?delay=${delay}&&page=${currentPage}`);
                // const response = await fetch(`https://rqres.in/api/users?delay=${delay}&&page=${currentPage}`);
                const json = await response.json();
                setUsers((d) => [...d, ...json.data]);
                currentPage = currentPage + 1;
                totalPages = json.total_pages;
            }
            setLastLoadingTime(new Date().toLocaleString())
        } catch (error) {
            console.error('error when fetching data', error);
            setError(true);
            handleError();

        } finally {
            setIsLoading(false);
        }
    }

    const handleError = () => {
        setTimeout(() => {
            setError(false);
        }, 3000)
    }

    const handleDelay = () => {
        setDelay(5);
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const filteredUsers = users.filter((user) => {
        return user.first_name.toLowerCase().includes(search.toLowerCase()) 
        || user.last_name.toLowerCase().includes(search.toLowerCase()) 
        || user.email.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div>
            <p>
                <input type='button' value='Delay 5 Seconds' onClick={handleDelay} />
            </p>
            <p>
                <input type='text' placeholder='search' onChange={handleInputChange} />
            </p>
            <p>Last Loading time: {lastLoadingTime}</p>
            {error && <p>Time out error, please try after 30 seconds</p>}
            {isLoading && <p>the data is loading....</p>}
            {filteredUsers.map((user, index) => <UserProfile key={index} user={user} />)}
        </div>
    )
}