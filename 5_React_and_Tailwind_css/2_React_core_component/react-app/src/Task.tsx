// export default Task;

interface TaskPropType {
    name : string;
    isDone? : boolean;
}

export default function Task({name, isDone}:TaskPropType){
    if(isDone === true){
        return <li>Completed: {name}</li>
    }
    return <li>Pending: {name}</li>
}

// export default function Task({name, isDone}:TaskPropType){
//     return isDone === true ? <li>Completed: {name}</li> : <li>Pending: {name}</li>;
//     return isDone === false && <li>Completed: {name}</li>   // conditional rendering
//     return isDone === false || <li>Completed: {name}</li>   // conditional rendering
// }


