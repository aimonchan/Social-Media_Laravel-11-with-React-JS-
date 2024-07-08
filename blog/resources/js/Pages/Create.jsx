import { useForm } from "@inertiajs/react";
export default function Create(){
    const {data,setData,post,errors,processing}=useForm({
        body:"",
    });

    function submit(e){
        e.preventDefault();
        post("/posts");
    }
    
    console.log(errors);


    return(
        <>
        <h1 className="title">Create a New Post</h1>
        
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

            {/* To show error from Laravel Backend */}
            {errors.body && <p className="error my-2">{errors.body}</p>}

            <button disabled={processing} type="submit" className="primary-btn">Add Post</button>
        </form>
        </>
    );
}