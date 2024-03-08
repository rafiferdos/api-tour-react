import { useState, useEffect } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);

    // const fetchUsers = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await response.json();
    //     setUsers(data);
    // }

    useEffect(() => {
        // fetchUsers();
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div className='flex flex-col lg:flex-row flex-wrap lg:gap-10 gap-6 items-center justify-center my-20'>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    )
}

export default Users;