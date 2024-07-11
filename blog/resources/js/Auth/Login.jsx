import Plainlayout from '../Layouts/Plainlayout'
function Login() {
    return (
        <>
            <div className="flex flex-row min-h-screen justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h1 className="text-2xl text-center font-semibold mb-4">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Log In</button>
                    </form>
                </div>
            </div>
        </>
    );
}

Login.layout = page => <Plainlayout children={page} title="Welcome" />

export default Login;
