import { useForm } from "@inertiajs/react";
export default function Create(){
    const {data,setData,post,errors,processing}=useForm({
        body:"",
    });
    return(
        <>
        <h1 className="title">Create Page</h1>
        <form 
        method="POST" 
        className="w-1/2 mx-auto"
        >
            <textarea 
            rows="10" 
            className="my-4" 
            value={data.body}
            >
            </textarea>
            <input type="submit" value="Add Post" className="primary-btn" />
        </form>
        </>
    );
}