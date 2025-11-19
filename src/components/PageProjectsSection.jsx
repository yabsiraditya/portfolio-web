import { Link } from "react-router"
import { getProjects } from "../assets/api/data"
import Button from "./Button"
import Card from "./Card"

const PageProjectsSection = () => {
    return (
        <>
            <section id="projects" className="flex items-center py-12 lg:py-24">
                <div className="container mx-auto px-5">
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
                        <Link to="/">
                            <Button>Back!</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageProjectsSection