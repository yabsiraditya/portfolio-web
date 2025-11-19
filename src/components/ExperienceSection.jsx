import { getExperiences } from "../assets/api/data"

const ExperienceSection = () => {
    return (
        <>
            <section id="experience" className="flex items-center py-12 lg:py-24">
                <div className="container mx-auto px-5">
                    <div className="flex justify-center mb-10">
                        <h2 className="text-md lg:text-lg w-fit font-medium bg-black px-3 py-1 text-white rounded-lg">Experience Me.</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="relative border-l-2 border-black ml-4">
                            {getExperiences.slice().reverse().map((exp, index) => (
                                <div key={index} className="mb-10 ml-6">
                                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-black ring-4 ring-white">
                                        <span className="h-3 w-3 rounded-full bg-white"></span>
                                    </span>
                                    <div className="bg-black rounded-lg max-w-xl">
                                        <div className="bg-white border-2 border-black rounded-lg p-3 -translate-x-1 -translate-y-1">
                                            <h3 className="text-xl font-bold">{exp.title}</h3>
                                            <p className="text-md font-medium">{exp.place}</p>
                                            <p className="mt-2">{exp.desc}</p>
                                            <p className="mt-3 text-sm font-medium">{exp.year}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExperienceSection