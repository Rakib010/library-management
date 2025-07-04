import { Facebook, Twitter, Instagram, Linkedin, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#f7f9eb] py-10">
      <div className="w-11/12 mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        {/* Left: Logo */}
        <div className="mb-2 md:mb-0">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="text-indigo-600 w-5 h-5" />
            <h1 className="text-lg font-bold text-indigo-700 tracking-wide">
              Next <span className="text-yellow-500">Page</span>
            </h1>
          </Link>
        </div>

        {/* Center: Text */}
        <div className="mb-2 md:mb-0 text-center font-semibold">
          Built with ❤️ for book lovers
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-yellow-500">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-600 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-600 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
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
