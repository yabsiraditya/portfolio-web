import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedWriter = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Web Developer...',
                'Graphic Designer...',
            ],
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1800,
            loop: true,
            loopCount: Infinity,
            cursorChar: '|',
            fadeOut: false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="mb-6">
                <span ref={el} className="text-xl lg:text-3xl font-medium"></span>
            </div>
        </>
    )
}

export default TypedWriter