

import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Home({posts}){
    console.log(posts)
    
    return(
        <>
        <ul>
            {posts.data.map(i=>(
                <li key={i.id} className="p-4 border-b">
                    <div className="text-sm text-slate-600">Posted on: {new Date(i.created_at).toLocaleTimeString()}</div>
                    <p className="font-medium">{i.body}</p>
                </li>
            ))}
        </ul>

        <div className="py-12 px-4">
            {posts.links.map(link=>(

                link.url ?


                <Link 
                key={link.label} 
                href={link.url}
                dangerouslySetInnerHTML={{__html:link.label}}
                className={`text-sm p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ''}`}
                />
                :

                <span
                key={link.label} 
                dangerouslySetInnerHTML={{__html:link.label}}
                className="text-sm p-1 mx-1 text-slate-300"
                >

                </span>
            ))}
        </div>      
        </>
    );
}

