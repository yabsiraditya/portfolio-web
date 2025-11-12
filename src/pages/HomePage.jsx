import Button from "../components/Button"
import Navbar from "../components/Navbar"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center min-h-screen items-center flex-col">
                <h1>Home Page</h1>
                <Button
                    classname="bg-white text-black">
                        Hello World
                </Button>            
            </div>
        </>
    )
}

export default HomePage