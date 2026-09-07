interface UserCartProps {
    name: string;
    isLoggedIn: boolean;
}

export default function UserCart({name, isLoggedIn}:UserCartProps){
    return(
        <div className="user">
            <h3>Name: {name}</h3>
            <h4>isLoggedIn: {isLoggedIn? 'Yes' : 'No'}</h4>
        </div>
    )
}