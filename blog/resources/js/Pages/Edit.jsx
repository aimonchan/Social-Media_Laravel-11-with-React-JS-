import { Head, useForm } from "@inertiajs/react";
export default function Edit({post}){
    const {data,setData,put,errors,processing}=useForm({
        body:post.body,
    });

    function submit(e){
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return(
        <>
        <Head title="Edit"/>
        <h1 className="title">Update Your Post</h1>
        
        <form 
        onSubmit={submit}
        className="w-1/2 mx-auto"
        >
            <textarea 
            rows="10" 
            value={data.body}
            onChange={(e)=>setData('body',e.target.value)}
            className={errors.body && '!ring-red-500'}
            >
            </textarea>

            {/* To show error from Laravel Backend start */}
            {errors.body && <p className="error my-2">{errors.body}</p>}
            {/* To show error from Laravel Backend end */}

            <button disabled={processing} type="submit" className="primary-btn">Update Post</button>
        </form>
        </>
    );
}