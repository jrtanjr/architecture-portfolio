import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <section className="mt-16">

      <h1 className="text-5xl font-bold">
        {project.title}
      </h1>

      <div className="mt-12 grid grid-cols-2 gap-6 rounded-3xl border p-8 md:grid-cols-4">

            <div>

                <p className="text-sm uppercase text-gray-500">
                Type
                </p>

                <p className="mt-2 font-medium">
                {project.type}
                </p>

            </div>

            <div>

                <p className="text-sm uppercase text-gray-500">
                Year
                </p>

                <p className="mt-2 font-medium">
                {project.year}
                </p>

            </div>

            <div>

                <p className="text-sm uppercase text-gray-500">
                Location
                </p>

                <p className="mt-2 font-medium">
                {project.location}
                </p>

            </div>

            <div>

                <p className="text-sm uppercase text-gray-500">
                Duration
                </p>

                <p className="mt-2 font-medium">
                {project.duration}
                </p>

            </div>

    </div>

      <p className="mt-8 max-w-3xl leading-8 text-gray-600">
        {project.summary}
      </p>

    </section>
  );
}