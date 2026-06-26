import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Selected Works
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Featured Projects
        </h2>

        <div className="mt-10 grid gap-16 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}