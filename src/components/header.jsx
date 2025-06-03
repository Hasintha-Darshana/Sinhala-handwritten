import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-[#001A3E] backdrop-blur-md shadow-md flex items-center px-6 fixed top-0 left-0 z-50">
      {/* Left: Logo or Title */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="w-15 h-15 rounded-full object-cover"
        />
      </div>

      {/* Right: Navigation */}
      <nav className="ml-auto flex items-center space-x-6">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/results", label: "Results" },
          { to: "/discussion", label: "Discussion" },
          { to: "/team", label: "Team" }
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-lg font-medium transition-colors duration-300 ${
                isActive ? "text-[#38bdf8]" : "text-white hover:text-yellow-300"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
