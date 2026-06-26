import Container from "../ui/Container";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f3]/90 backdrop-blur-md border-b border-neutral-200">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-base font-semibold tracking-wide">
            ENA 
          </a>

          <nav>
            <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}