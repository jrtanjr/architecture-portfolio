import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`../projects/${project.slug}`}>
        <article className="group">
        <div className="overflow-hidden rounded-2xl">
            <Image 
            src={project.cover}
            alt={project.title}
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
            />
        </div>

        <div className="mt-6">
            <h3 className="mt-3 text-4xl font-bold font-serif">
            {project.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.1em] text-gray-600">
                 <span>{project.type}

                {''} {project.year}</span>
                <span>duration: {project.duration}</span>
                <span>location: {project.location}</span>
            </div>
            <p className="mt-5 leading-7 text-gray-600">
            {project.summary}
            </p>

        </div>
        </article>
    </Link>
  );
}