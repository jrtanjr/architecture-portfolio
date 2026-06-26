import Container from "../ui/Container";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Profile", href: "#profile" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f3]/90 backdrop-blur-md border-b border-neutral-200">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="leading-tight">
  <h1 className="text-lg font-bold tracking-wide">
    ENA HO
  </h1>

  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
    Architecture Portfolio
  </p>
</Link>

          <nav>
            <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition 
                    hover:text-neutral-900
                      after:block
                      after:h-[2px]
                      after:w-0
                      after:bg-neutral-900
                      after:transition-all
                      hover:after:w-full"
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