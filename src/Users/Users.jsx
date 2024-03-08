import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='flex flex-col lg:flex-row flex-wrap lg:gap-10 gap-6 items-center justify-center my-20'>
            {users.map(user => (
                <div key={user.id} className="card lg:w-96 bg-base-100 shadow-xl py-8">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.address.street}, {user.address.city}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Company: {user.company.name} | {user.company.bs}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users;