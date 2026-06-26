import { notFound } from "next/navigation";

import Container from "../../../components/ui/Container";

import ProjectHero from "../../../components/project/ProjectHero";
import ProjectInfo from "../../../components/project/ProjectInfo";
import ProjectGallery from "../../../components/project/ProjectGallery";
import Reflection from "../../../components/project/Reflection";

import { projects } from "../../../data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-32">

      <Container>

        <ProjectHero project={project} />

        <ProjectInfo project={project} />

        <ProjectGallery project={project} />

        <Reflection project={project} />

      </Container>

    </main>
  );
}