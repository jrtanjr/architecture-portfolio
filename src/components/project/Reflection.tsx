import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function Reflection({ project }: Props) {
  return (
    <section className="mt-32 mb-32 max-w-4xl">

      <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
        Reflection
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        What I Learned
      </h2>

      <div className="mt-10 border-l-4 border-[var(--accent)] pl-8">

        <span className="text-6xl leading-none text-[var(--accent)]">
          “
        </span>

        <p className="mt-4 text-lg leading-9 text-gray-600 whitespace-pre-line">
          {project.reflection}
        </p>

      </div>

    </section>
  );
}