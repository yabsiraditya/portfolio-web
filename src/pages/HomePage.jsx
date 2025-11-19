import AboutSection from "../components/AboutSection"
import ExperienceSection from "../components/ExperienceSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProjectSection from "../components/ProjectSection"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <Footer />
        </>
    )
}

export default HomePage