import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>
        <div className="max-w-3xl">
         <SectionTitle
            label="Portfolio"
            title="Selected Works"
            description="A curated selection of academic projects exploring light, ecology, and spatial experiences."
          /> 
        </div>

        <div className=" space-y-28">
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