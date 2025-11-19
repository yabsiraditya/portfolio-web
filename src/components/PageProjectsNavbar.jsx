import { Link } from "react-router"

const PageProjectsNavbar = () => {
    return (
        <>
            <nav className="flex justify-center py-3">
                <div className="container mx-auto flex-col text-center border-b px-5">
                    <div className='flex items-center justify-center'>
                        <Link to="/">
                            <h1 className="font-bold text-4xl">Portfolio.</h1>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default PageProjectsNavbar