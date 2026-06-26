import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-32"
    >
      <Container>

        <div className="rounded-3xl border p-16">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Resume
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            CV is Here!
          </h2>

          <p className="mt-8 max-w-2xl leading-8 text-gray-600">
            Download my resume to learn more about my education,
            academic achievements, technical skills and professional
            experiences.
          </p>

          <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block"
                >
                <Button className="w-full sm:w-auto">
                    Download Resume
                </Button>
          </a>

        </div>

      </Container>
    </section>
  );
}