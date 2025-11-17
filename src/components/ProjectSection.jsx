import Button from "./Button"
import Card from "./Card"

const ProjectSection = () => {
    return (
        <>
            <section className="flex items-center my-12">
                <div className="container mx-auto px-5">
                    <h2 className="text-md lg:text-lg w-fit font-medium bg-black px-3 py-1 text-white rounded-lg mb-6">Projects.</h2>
                    <div className="flex flex-wrap justify-between gap-6">
                        <Card>
                            <Card.Header />
                            <Card.Body></Card.Body>
                            <Card.Footer></Card.Footer>
                        </Card>
                        <Card>
                            <Card.Header />
                            <Card.Body></Card.Body>
                            <Card.Footer></Card.Footer>
                        </Card>
                        <Card>
                            <Card.Header />
                            <Card.Body></Card.Body>
                            <Card.Footer></Card.Footer>
                        </Card>
                    </div>
                    <div className="flex justify-center mt-6">
                        <Button>Show More!</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectSection
