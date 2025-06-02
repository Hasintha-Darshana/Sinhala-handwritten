import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-[#0b1f3a]/90 backdrop-blur-md shadow-md flex items-center px-6 fixed top-0 left-0 z-50">
      {/* Left: Logo or Title */}
      <div className="text-white text-2xl font-extrabold tracking-wide">
        Sinhala Character AI
      </div>

      {/* Right: Navigation */}
      <nav className="ml-auto flex items-center space-x-6">
        <Link
          to="/"
          className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/results"
          className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Results
        </Link>
        <Link
          to="/discussion"
          className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Discussion
        </Link>
        <Link
          to="/team"
          className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Team
        </Link>
      </nav>
    </header>
  );
}
