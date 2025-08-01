
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
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
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="Pragmatech Logo" 
              className="h-10 w-auto"
            />
            {/* Company Name */}
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900 leading-tight">PRAGMATECH</div>
              <div className="text-sm text-gray-600 leading-tight">COMPLIANCE PARTNERS</div>
            </div>
            {/* Mobile: Just show logo */}
            <div className="sm:hidden">
              <div className="text-sm font-bold text-gray-900">PRAGMATECH</div>
            </div>
          </div>
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
