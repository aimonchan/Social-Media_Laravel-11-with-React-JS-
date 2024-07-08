import {useForm} from "@inertiajs/react";

export default function Show({post}){
    const{delete: destroy}= useForm();
    return(
        <>
        <div key={post.id} className="p-4 border-b">
                    <div className="text-sm text-slate-600">Posted on: {new Date(post.created_at).toLocaleTimeString()}</div>
                    <p className="font-medium">{post.body}</p>

                    <div className="flex items-center justify-end gap-2">
                        <form>
                            <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                        </form>
                    </div>
        </div>

        </>
    );
}