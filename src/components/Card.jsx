const Card = ({ children }) => {
    return (
        <div className="bg-black rounded-xl w-full sm:max-w-sm md:max-w-sm lg:max-w-md">
            <div className="border-2 border-black bg-white rounded-xl flex flex-col justify-between -translate-x-1 -translate-y-1 transition duration-200 hover:translate-none">
                {children}
            </div>
        </div>
    )
}

const Header = (props) => {
    const { image, id } = props;
    return (
        <img
            src={image}
            alt=""
            className="object-cover object-center w-full p-3 rounded-3xl h-60"
        />
    )
}

const Body = (props) => {
    const { name, children } = props
    return (
        <div className="px-4 py-3 space-y-1">
            <h5 className="text-xl font-semibold tracking-tight truncate">
                {name}
            </h5>
            <p className="text-sm text-gray-700 line-clamp-2">
                {children}
            </p>
        </div>
    )
}


const Footer = (props) => {
    const { tech } = props
    return (
        <div className="flex flex-wrap gap-2 px-4 pb-4">
            {Array.isArray(tech) ? (
                tech.map((item, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-black px-2 py-1 text-xs font-medium text-white"
                    >
                        {item}
                    </span>
                ))
            ) : (
                <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-xs font-medium text-white">
                    {tech}
                </span>
            )}
        </div>
    )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card