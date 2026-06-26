import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types/project";
import Button from "../ui/Button";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article
        className="
            group
            overflow-hidden
            rounded-3xl
            transition-all
            duration-500
            hover:-translate-y-2
        "
    >

        <div className="overflow-hidden rounded-3xl mt-15">

          <Image
            src={project.cover}
            alt={project.title}
            width={1800}
            height={1200}
            className="
              w-full
              h-auto
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

        </div>

        <div className="mt-12 max-w-4xl">

          <p className="uppercase tracking-widest text-sm text-gray-500">
            {project.type} • {project.year}
          </p>

          <h3 className="mt-3 text-5xl font-bold">
            {project.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {project.summary}
          </p>

          <div className="mt-8">
            <Button>
              View Project
            </Button>
          </div>

        </div>

      </article>
    </Link>
  );
}