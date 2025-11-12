const Card = (props) => {
    const { children } = props

    return (
        <>
            <div className="bg-black rounded-lg w-full max-w-xs">
                <div className="border-2 bg-white border-black rounded-lg flex flex-col justify-between -translate-x-1 -translate-y-1">
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
                src=""
                alt=""
                className="rounded-t-lg object-contain object-center w-full h-80"
            />
        </a>
    )
}

const Body = () => {
    return (
        <div className="h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight truncate">Belajar Node js</h5>
            </a>
            <p className="text-s line-clamp-2">TEst</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold">HTML</span>
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card