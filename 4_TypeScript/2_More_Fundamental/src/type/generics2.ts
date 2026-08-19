// function useState(initialValue:number){
//     let value = initialValue;

//     function setValue(newValue:number){
//         value = newValue;
//     }
//     return [value, setValue];
// }

// const [counter, setCounter] = useState(0);

// console.log(counter, setCounter);


function userState<T>(initialValue:T):[T, (newValue : T) => void]{
    let value = initialValue;
    function setValue(newValue : T){
        value = newValue;
    }
    return [value, setValue];
}

userState<string>("");
userState<number>(10);
userState<boolean>(true);

interface User{
    email : string;
    isLoggedIn : boolean;
}

userState<User>({email: '', isLoggedIn: false});
userState<User | null>(null);