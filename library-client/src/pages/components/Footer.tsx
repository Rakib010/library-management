import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#f7f9eb] py-10">
      <div className="w-11/12 mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        {/* Left: Logo */}
        <div className="mb-2 md:mb-0">
          <Link
            to="/"
            className="flex items-center gap-1 font-bold text-indigo-700 text-lg"
          >
            Next <span className="text-yellow-500">Page</span>
          </Link>
        </div>

        {/* Center: Text */}
        <div className="mb-2 md:mb-0 text-center font-semibold">
          Built with ❤️ for book lovers
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-yellow-500 ">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-indigo-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-indigo-600 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-indigo-600 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-indigo-600 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
