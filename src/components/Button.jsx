const Button = (props) => {
    const {
        children = "...",
        classname = "bg-white",
        onClick = () => { },
        type = "button"
    } = props;

    return (
        <div className="bg-black rounded-lg">
            <button
                className={`py-3 px-5 font-semibold rounded-lg border-2 border-black -translate-x-1 -translate-y-1 ${classname}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export default Button