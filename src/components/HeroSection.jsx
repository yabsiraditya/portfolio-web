import Lanyard from "./Lanyard/Lanyard"
import Button from "./Button"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons"

const HeroSection = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Web Developer...',
                'Grapich Designer...',
            ],
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1800,
            loop: true,
            loopCount: Infinity,
            cursorChar:'|',
            fadeOut: false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section className="flex items-center min-h-screen">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full">
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left lg:mt-0">
                            <h2 className="text-2xl">Hi There!</h2>
                            <h1 className="text-6xl font-bold my-3">I'm Yabsir Aditya</h1>
                            <div className="App mb-6">
                                <span ref={el} className="text-4xl mb-6 font-medium">|</span>
                            </div>
                            <div className="flex flex-row gap-3 mb-5">
                                <Button>Hire Me</Button>
                                <Button>Download CV</Button>
                            </div>
                            <p className="font-medium">Social Media:</p>
                            <ul className="flex flex-row gap-2 mt-3">
                                <li><a className="text-4xl" href=""><FontAwesomeIcon icon={faGithubSquare} /></a></li>
                                <li><a className="text-4xl" href=""><FontAwesomeIcon icon={faSquareLinkedin} /></a></li>
                                <li><a className="text-4xl" href=""><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
                                <li><a className="text-4xl" href=""><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center items-center">
                            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection