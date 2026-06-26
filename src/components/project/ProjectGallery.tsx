import Image from "next/image";
import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  return (
    <section className="mt-28">

      <h2 className="mb-12 text-3xl font-semibold">
        Gallery
      </h2>

      <div className="space-y-10">

        {/* First Image */}

        <Image
          src={project.images[0]}
          alt={project.title}
          width={1800}
          height={1200}
          className="w-full rounded-3xl object-cover"
        />

        {/* Middle Two */}

        <div className="grid gap-10 md:grid-cols-2">

          <Image
            src={project.images[1]}
            alt={project.title}
            width={1000}
            height={800}
            className="rounded-3xl object-cover"
          />

          <Image
            src={project.images[2]}
            alt={project.title}
            width={1000}
            height={800}
            className="rounded-3xl object-cover"
          />

        </div>

        {/* Last */}

        <Image
          src={project.images[3]}
          alt={project.title}
          width={1800}
          height={1200}
          className="w-full rounded-3xl object-cover"
        />

      </div>

    </section>
  );
}