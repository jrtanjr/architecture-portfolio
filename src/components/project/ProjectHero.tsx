import Image from "next/image";
import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section>
      <Image
        src={project.cover}
        alt={project.title}
        width={1800}
        height={1000}
        priority
        className="w-full rounded-[40px] shadow-2xl object-cover"
      />
    </section>
  );
}