import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t py-5">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <div>
            <h3 className="font-semibold">
              ENA HO
            </h3>

            <p className="text-sm text-gray-500">
              Architecture Portfolio
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ENA MEI CHEN HO. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}