import { notFound } from "next/navigation";
import Image from "next/image";

import Container from "../../../components/ui/Container";
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
        <Image
          src={project.cover}
          alt={project.title}
          width={1600}
          height={900}
          className="rounded-3xl w-full h-auto"
        />

        <h1 className="mt-12 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4 text-gray-500">
          {project.type} • {project.year}
        </p>

        <p className="mt-8 max-w-3xl leading-8">
          {project.summary}
        </p>

        <section className="mt-24">
            <h2 className="text-3xl font-semibold mb-10">
                Project Gallery
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {project.images.map((image, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-2xl"
                >
                    <Image
                    src={image}
                    alt={`${project.title} Image ${index + 1}`}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover transition duration-500 hover:scale-105"
                    />
                </div>
                ))}
            </div>
        </section>

        <section className="mt-24 max-w-4xl">
            <h2 className="text-3xl font-semibold">
                Reflection
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
                {project.reflection}
            </p>
        </section>
      </Container>
    </main>
  );
}