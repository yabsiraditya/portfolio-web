import errorImg from '/assets/images/404.svg'

const ErrorPage = () => {
    return (
        <>
            <div className="flex justify-center min-h-screen items-center">
                <div className='rounded-lg bg-black'>
                    <div className="flex flex-row border-2 border-black p-9 rounded-lg bg-white -translate-x-1 -translate-y-1">
                        <div className="m-5">
                            <img className='w-100 p-5' src={errorImg} alt="404 Not Found" />
                        </div>
                        <div className="flex flex-col justify-center items-center m-5">
                            <h1 className="text-3xl font-bold">Oops!</h1>
                            <p className="font-medium my-5">Sorry, an unexpected error has occured</p>
                            <p className="text-slate-500">404 Not Found</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage