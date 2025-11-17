import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-10 flex justify-center w-full py-3 bg-transparent">
                <div className="container mx-auto px-5">
                    <div className='flex items-center justify-center'>
                        <div className="bg-black rounded-lg w-auto hidden sm:block">
                            <div className="rounded-lg bg-white border-black border-2 -translate-x-1 -translate-y-1">
                                <div className="flex flex-row py-3 px-9 gap-16">
                                    <a className='font-medium' href="#home">Home</a>
                                    <a className='font-medium' href="#about">About</a>
                                    <a className='font-medium' href="#project">Projects</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-3 right-3 sm:hidden">
                            <div className='bg-black rounded-lg'>
                                <div className='rounded-lg bg-white border-black border-2 -translate-x-1 -translate-y-1'>
                                    <Hamburger
                                        rounded
                                        size={28}
                                        onToggle={(toggled) => {
                                            const element = document.getElementById("mobile-nav");
                                            if (element) {
                                                element.classList.toggle("hidden", !toggled);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:hidden" id="mobile-nav">
                    <div className='absolute top-19 right-3 w-72 bg-black rounded-lg z-20'>
                    <div className=" bg-white border-2 border-black rounded-lg text-center flex flex-col -translate-x-1 -translate-y-1 p-3">
                        <a href="#home" className="my-3 font-medium">Home</a>
                        <a href="#about" className="my-3 font-medium">About</a>
                        <a href="#project" className="my-3 font-medium">Projects</a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar