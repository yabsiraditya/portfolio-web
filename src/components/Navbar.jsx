const Navbar = () => {
    return (
        <>
            <nav className="py-3 fixed z-50 flex justify-center items-center w-full">
                <div className="bg-black rounded-lg">
                    <div className="rounded-lg bg-white border-black border-2 -translate-x-1 -translate-y-1">
                        <ul className="flex flex-row py-3 px-9 gap-16">
                            <li>Home</li>
                            <li>About</li>
                            <li>Experience</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar