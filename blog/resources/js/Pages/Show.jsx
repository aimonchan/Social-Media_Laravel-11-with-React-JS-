import {useForm, Link} from "@inertiajs/react";

export default function Show({post}){
    const{delete: destroy}= useForm(); 
    // delete can't be used directly
    // so, we give it a name "destroy"

    function submit(e){
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }


    return(
        <>
        {/* Post Start */}
        <div key={post.id} className="p-4 border-b">
                    <div className="text-sm text-slate-600">Posted on: {new Date(post.created_at).toLocaleTimeString()}</div>
                    <p className="font-medium">{post.body}</p>
        {/* Post End */}

                    <div className="flex justify-end">
                    {/* Delete Button start*/}
                    <div className="mx-1 gap-2">
                        <form onSubmit={submit}>
                            <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                        </form>
                    </div>
                     {/* Delete Button end*/}

                     {/* Edit Button start*/}
                    <Link href={`/posts/${post.id}/edit`} className="bg-green-500 rounded-md text-sm px-4 py-1 text-white">Update</Link>
                     {/* Edit Button end*/}
                    </div>                   
        </div>

        </>
    );
}