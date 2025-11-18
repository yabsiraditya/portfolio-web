import { Link } from "react-router"
import Button from "./Button"
import Card from "./Card"
import { getProjects } from "../assets/api/data"

const ProjectSection = () => {
    return (
        <>
            <section id="project" className="flex items-center py-12 lg:py-24">
                <div className="container mx-auto px-5">
                    <div className="flex justify-center mb-10">
                        <h2 className="text-md lg:text-lg w-fit font-medium bg-black px-3 py-1 text-white rounded-lg">My Project.</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12">
                        {getProjects.length > 0 && getProjects.map((project) => (
                            <Card key={project.id}>
                                <Card.Header image={project.image} id={project.id} />
                                <Card.Body name={project.title}>
                                    {project.description}
                                </Card.Body>
                                <Card.Footer tech={project.tech} />
                            </Card>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        <Link to="/projects">
                            <Button>Show More!</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectSection
