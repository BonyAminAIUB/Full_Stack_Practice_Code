interface BookProps{
    name : string;
}

export default function Book({name} : BookProps){
    return <li>Book name: {name}</li>
}