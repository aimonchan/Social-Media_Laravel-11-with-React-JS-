

import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Home({posts}){

    const {flash} = usePage().props 
    //Because the flash message is existing in the props
    //To extract flash message, we need to use usePage()

    const{component}= usePage();
    
    const[flashMsg, setFlashMsg]= useState(flash.message);
    setTimeout(()=>{
        setFlashMsg(null)
    },2000) //for 2 seconds..
    
    return(
        <>
        <Head title={component}/>

        {/* Flash Message start */}
        {flashMsg && <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsg}</div>}
        {/* Flash Message end */}

        {/* Flash Message start */}
        {flash.success && <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">{flash.success}</div>}
        {/* Flash Message end */}

        <ul>
            {posts.data.map(i=>(
                <li key={i.id} className="p-4 border-b">
                    <div className="text-sm text-slate-600">Posted on: {new Date(i.created_at).toLocaleTimeString()}</div>
                    <p className="font-medium">{i.body}</p>

                    <Link 
                    href={`/posts/${i.id}`}
                    className="text-link text-sm">Read more...</Link>
                </li>
            ))}
        </ul>


        {/* Pagination start*/}
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
        {/* Pagination end*/}      
        </>
    );
}

