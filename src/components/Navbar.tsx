
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "ISO 27001 Compliance", path: "/services/iso-27001" },
  { name: "ISO 27701 Compliance", path: "/services/iso-27701" },
  { name: "ISO 42001 Compliance", path: "/services/iso-42001" },
  { name: "SOC 2 Compliance", path: "/services/soc-2" },
  { name: "GDPR Compliance", path: "/services/gdpr" },
  { name: "DPDP Act, 2023", path: "/services/dpdp-act-2023" },
  { name: "IT Audit & Assurance", path: "/services/it-audit-assurance" },
  { name: "Healthcare IT Compliance", path: "/services/healthcare-it-compliance" },
  { name: "ISO 9001 Compliance", path: "/services/iso-9001" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // Handle click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

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
          
          {/* Services Dropdown */}
          <li className="relative" ref={servicesDropdownRef}>
            <button
              onClick={toggleServices}
              className={cn(
                "text-md font-medium px-3 py-1 rounded transition-colors hover:bg-gray-100 flex items-center gap-1",
                location.pathname.startsWith('/services')
                  ? "bg-gray-100 text-blue-800"
                  : "text-gray-700"
              )}
            >
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            
            {/* Services Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
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
            
            {/* Mobile Services Section */}
            <li>
              <div className="px-3 py-2 text-md font-medium text-gray-700 border-t border-gray-100 mt-2 pt-2">
                Services
              </div>
              <ul className="ml-4 space-y-1">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm px-3 py-2 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
