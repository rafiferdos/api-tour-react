const User = ({user}) => {
    const { name, username, email, phone, website } = user
    return (
        <>
            <div key={user.id} className="card lg:w-96 bg-base-100 shadow-xl py-8">
                <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{username}</p>
                    <p>{email}</p>
                    {/* <p>{address.street}, {address.city}</p> */}
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    {/* <p>Company: {company.name} | {company.bs}</p> */}
                </div>
            </div>
        </>
    )
}

export default User