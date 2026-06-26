interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">

      <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
        {label}
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}

    </div>
  );
}