interface TodoPropType {
    task : string;
    time? : string;
}

// function Todo({task, time}:{task:string, time?:string}){
//     return <li>Do this work: {task} at {time}</li>
// }

function Todo({task, time}:TodoPropType){
    return(
        <li>Do this work: {task} at {time}</li>
    )
}

export default Todo;

// const {task, time} : TodoPropType = {task:'take a shower', time: '10.00'}