import UserCart from "./UserCart";

interface User{
    name : string;
    isLoggedIn : boolean;
}

const users:User[] = [
    {name: 'Bony Amin', isLoggedIn : true},
    {name: 'Bony', isLoggedIn : false},
    {name: 'Amin', isLoggedIn : true},
    {name: 'Md Amin', isLoggedIn : false},
]

export default function Users(){
    return(
        <div>
            {
                users.map(user => <UserCart name={user.name} isLoggedIn={user.isLoggedIn}></UserCart>)
            }
        </div>
    )
}
// export default function Users(){
//     return(
//         <div>
//             {
//                 users.map(user => <li>{user.name} and {user.isLoggedIn}</li>)
//             }
//         </div>
//     )
// }