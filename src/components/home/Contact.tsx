import Container from "../ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-bold">
            Let`s Connect
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <p>
            📧 Email
            <br />
            enamcho2905@gmail.com
          </p>

          <p>
            📱 Phone
            <br />
            +60 18-3836289 (WhatsApp Available)
          </p>

          <p>
            📍 Location
            <br />
            Sungai Long, Selangor
          </p>

          <p>
            🌐 LinkedIn Profile
            <br />
            Ena Ho - linkedin.com/in/ena-ho-5362a2324
          </p>

        </div>

      </Container>
    </section>
  );
}