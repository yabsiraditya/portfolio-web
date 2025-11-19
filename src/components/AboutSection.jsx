import { getProfile } from "../assets/api/data"
import SkillsIcon from "./SkillsIcon"

const AboutSection = () => {
    return (
        <>
            <section id="about" className="flex items-center py-12 lg:py-24">
                <div className="container mx-auto px-5">
                    <div className="flex justify-center mb-10">
                        <h2 className="text-md lg:text-lg w-fit font-medium bg-black px-3 py-1 text-white rounded-lg">About Me.</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between h-full">
                        <div className="w-full lg:w-1/2 flex flex-col items-start">
                            <p className="mb-6 text-lg">{getProfile.about}</p>
                            <div className="bg-black rounded-lg mb-6 w-full">
                                <div className="py-2 px-3 lg:py-3 lg:px-5 bg-white rounded-lg border-2 border-black -translate-x-1 -translate-y-1">
                                    <h1 className="font-bold text-2xl">{getProfile.education.university}</h1>
                                    <p className="font-medium">{getProfile.education.university} | {getProfile.education.year} </p>
                                    <p>GPA: {getProfile.education.gpa}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex-col">
                            <h1 className="font-bold text-2xl text-center mb-6">Skills</h1>
                            <SkillsIcon />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection