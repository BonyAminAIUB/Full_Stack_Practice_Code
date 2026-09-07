import './UserCart.css';

export default function UserCart({user}){
    return(
        <div className='user'>
            <h3>ID: {user.id}</h3>
            <h3><small>Name: {user.name}</small></h3>
            <h3><small>Email: {user.email}</small></h3>
            <p><small>Phone: {user.phone}</small></p>
        </div>
    )
}