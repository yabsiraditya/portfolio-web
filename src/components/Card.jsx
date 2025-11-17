import projectImg from "../assets/images/project1.png"

const Card = (props) => {
    const { children } = props

    return (
        <>
            <div className="bg-black rounded-lg max-w-md">
                <div className="border-2 bg-white border-black rounded-lg flex flex-col justify-between -translate-x-1 -translate-y-1 overflow-hidden">
                    {children}
                </div>
            </div>
        </>
    )
}

const Header = () => {
    return (
        <a href="">
            <img
                src={projectImg}
                alt=""
                className="object-fill object-center w-full"
            />
        </a>
    )
}

const Body = () => {
    return (
        <div className="h-full px-3 my-3">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight truncate">Belajar Node js</h5>
            </a>
            <p className="text-s line-clamp-2">Testing Cahs</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="flex flex-wrap gap-1 px-3 mb-3">
            <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">Java</span>
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card