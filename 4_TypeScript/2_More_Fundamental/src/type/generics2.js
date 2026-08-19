"use strict";
// function useState(initialValue:number){
//     let value = initialValue;
Object.defineProperty(exports, "__esModule", { value: true });
//     function setValue(newValue:number){
//         value = newValue;
//     }
//     return [value, setValue];
// }
// const [counter, setCounter] = useState(0);
// console.log(counter, setCounter);
function userState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
userState("");
userState(10);
userState(true);
userState({ email: '', isLoggedIn: false });
userState(null);
//# sourceMappingURL=generics2.js.map