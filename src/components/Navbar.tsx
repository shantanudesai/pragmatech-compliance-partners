
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 z-30">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-black text-xl tracking-tight text-[#143066] hover:text-blue-700 transition-colors">Pragmatech Compliance Partners</Link>
        <ul className="flex items-center gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
