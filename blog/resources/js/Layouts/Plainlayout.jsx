import { Link } from "@inertiajs/react";
export default function Plainlayout({children}){
    return(
        <>
        <header className="sticky top-0 drop-shadow shadow-blue-200">
            {/* <nav>
                <Link href="/" className="nav-link">
                Home
                </Link>
                <Link href="/posts/create" className="nav-link">
                Create
                </Link>
            </nav> */}
        </header>
 
        <main>{children}</main>
        
        </>
    )
}