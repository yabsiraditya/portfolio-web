const Button = (props) => {
    const {
        children = "...",
        classname = "bg-white",
        onClick = () => { },
        type = "button"
    } = props;

    return (
        <div className="inline-block bg-black rounded-lg">
            <button
                className={`py-2 px-3 lg:py-3 lg:px-5 bg-white font-semibold rounded-lg border-2 border-black -translate-x-1 -translate-y-1 ${classname} transition duration-200 hover:translate-none`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export default Button