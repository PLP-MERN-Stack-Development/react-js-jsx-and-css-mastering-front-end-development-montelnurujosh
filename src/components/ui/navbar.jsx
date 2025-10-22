// src/components/ui/navbar.jsx
import { NavLink } from "react-router-dom"
import { useTheme } from "@/context/ThemeContext"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const linkClasses =
    "transition-colors duration-200 hover:text-gray-300 px-2 py-1"
  const activeClasses = "text-blue-400 font-semibold"

  return (
    <nav className="bg-neutral-900 dark:bg-neutral-950 text-white py-4 px-6 sm:px-8 flex flex-wrap justify-between items-center border-b border-gray-800">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold tracking-wide mb-2 sm:mb-0">
        Joshua Nuru
      </h1>

      {/* Nav Links */}
      <div className="flex flex-wrap items-center space-x-4 sm:space-x-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${linkClasses} ${activeClasses}` : linkClasses
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${linkClasses} ${activeClasses}` : linkClasses
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${linkClasses} ${activeClasses}` : linkClasses
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/ApiData"
          className={({ isActive }) =>
            isActive ? `${linkClasses} ${activeClasses}` : linkClasses
          }
        >
          API Data
        </NavLink>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700 transition"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  )
}
