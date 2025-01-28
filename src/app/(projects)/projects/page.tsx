import { ProjectsList } from "@/app/(projects)/_components/ProjectsList";
import { Typography } from "@/ui/components/atoms/Typography";

const ProjectsPage = () => {
    return (
        <div>
            <section className="mb-20">
                <Typography variant="title" as={"h2"} className="mb-8 text-6xl">
                    My <span className="text-primary">Best</span> Creations
                </Typography>
                <Typography className="mb-10 text-lg sm:text-2xl">
                    Explore my front-end development projects, where I combine
                    creative design with clean code to build responsive and
                    user-friendly web experiences.
                </Typography>
            </section>
            <section>
                <ProjectsList />
            </section>
        </div>
    );
};

export default ProjectsPage;
