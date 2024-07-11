export default function Login(){
    return(
        <>
        <div className="w-1/2 mx-auto my-4">

                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="mb-4">
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Log In</button>
                    </form>
        </div>
    </div>
        </>
    );
}