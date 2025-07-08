import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useUserDataStore from "@/zustang/useUserData";
import Profile from "../ProfileInfo/ProfileInfo";

const Navbar = () => {
  const { isLoggedIn, userData } = useUserDataStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "DSA Problems", path: "/problem-list" },
    { label: "Frontend Problems", path: "/frontendproblemlist" },
    { label: "Playground", path: "/playground/code-editor" },
    { label: "Community", path: "/community-section" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="./logo.png" alt="Logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">Get AI News</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-500"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Profile Data={userData} />
            ) : (
              <NavLink
                to="/login"
                className="text-sm font-medium px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md shadow"
              >
                Login
              </NavLink>
            )}

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="space-y-2">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-sm font-medium ${
                        isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-500"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
