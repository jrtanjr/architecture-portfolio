import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function Reflection({ project }: Props) {
  return (
    <section className="mt-32 rounded-[40px] bg-neutral-100 p-12">

      <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
        Reflection
        </p>

        <h2 className="mt-4 text-4xl font-bold">
        What I Learned
        </h2>

      <p className="mt-8 max-w-4xl leading-8 text-gray-600">
        {project.reflection}
      </p>

    </section>
  );
}