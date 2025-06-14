
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 z-30">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Logo - responsive text sizing */}
        <Link 
          to="/" 
          className="font-black text-sm sm:text-lg md:text-xl tracking-tight text-[#143066] hover:text-blue-700 transition-colors"
        >
          <span className="block sm:hidden">Pragmatech</span>
          <span className="hidden sm:block">Pragmatech Compliance Partners</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={cn(
                  "text-md font-medium px-3 py-1 rounded transition-colors hover:bg-gray-100",
                  location.pathname === link.path
                    ? "bg-gray-100 text-blue-800"
                    : "text-gray-700"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block text-md font-medium px-3 py-2 rounded transition-colors hover:bg-gray-100",
                    location.pathname === link.path
                      ? "bg-gray-100 text-blue-800"
                      : "text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
