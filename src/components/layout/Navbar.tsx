export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-xl font-semibold tracking-wide">
          ENA MEI CHEN HO
        </h1>

        <nav>
          <ul className="flex gap-8 text-sm uppercase tracking-wider">
            <li><a href="#">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}