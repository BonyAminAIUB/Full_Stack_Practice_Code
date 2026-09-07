import { use } from "react";

export default function Posts({postDataPromise}){

    const posts = use(postDataPromise);
    console.log(posts);

    return(
        <div>
            
            <h3>Id: {postDataPromise.id}</h3>
            <p><small>Title: {postDataPromise.title}</small></p>
        </div>
    )
}