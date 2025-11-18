import Lanyard from "./Lanyard/Lanyard"
import Button from "./Button"
import TypedWriter from "./TypedWriter/TypedWriter"
import { getProfile } from "../assets/api/data"
import { icons } from "../assets/api/icons"
import SosmedIcon from "./SosmedIcon"

const HeroSection = () => {
    return (
        <>
            <section id="home" className="flex items-center min-h-screen">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full">
                        <div className="w-full lg:w-1/2 flex flex-col items-start">
                            <h2 className="text-md lg:text-lg font-medium bg-black px-3 py-1 text-white rounded-lg">Hi There!</h2>
                            <h1 className="text-3xl lg:text-5xl font-bold my-3">I'm {getProfile.name}</h1>
                            <TypedWriter />
                            <div className="flex flex-row gap-5 mb-5">
                                <Button>Hire Me</Button>
                                <Button>Download CV</Button>
                            </div>
                            <p className="font-medium">Social Media:</p>
                            <SosmedIcon />
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
                            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
                            <div id="grid" className="absolute inset-0 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection