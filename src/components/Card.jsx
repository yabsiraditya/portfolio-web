import projectImg from "../assets/images/project1.png"

const Card = ({ children }) => {
    return (
        <div className="bg-black rounded-xl w-full sm:max-w-sm md:max-w-sm lg:max-w-md">
            <div className="border-2 border-black bg-white rounded-xl flex flex-col justify-between -translate-x-1 -translate-y-1">
                {children}
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <a href="#" className="block">
            <img
                src={projectImg}
                alt=""
                className="object-fill object-center w-full p-3 rounded-3xl"
            />
        </a>
    )
}

const Body = () => {
    return (
        <div className="px-4 py-3 space-y-1">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight truncate">
                    Belajar Node JS
                </h5>
            </a>
            <p className="text-sm text-gray-700 line-clamp-2">
                Testing Cahs
            </p>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="flex flex-wrap gap-2 px-4 pb-4">
            <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-xs font-medium text-white">
                Java
            </span>
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card