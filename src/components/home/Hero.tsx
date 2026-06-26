import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[var(--secondary)]">
              <br/>
              Architecture Portfolio
            </p>

            <h1 className="mt-5 text-5xl lg:text-7xl font-bold leading-tight font-serif">
              Listen
            </h1>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight font-serif">
              Before It Speaks
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--secondary)]">
              An architecture student passionate about creating spaces that
              connect people, nature, and everyday life through thoughtful
              design.
            </p>

            <div className="mt-10">
              <a href="#projects">
                <Button>
                  View Projects
                </Button>
              </a>
            </div>

          </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">

                <Image
                    src="/hero/hero.jpeg"
                    alt="Architecture Hero"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />

            </div>

          </div>

      </Container>
    </section>
  );
}