import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#f7f9eb]">
      <div className="w-11/12 mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="text-indigo-600 w-6 h-6" />
          <h1 className="text-2xl font-bold text-indigo-700 tracking-wide">
            Next <span className="text-yellow-500">Page</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
          <Link to="/home" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/allBooks" className="hover:text-indigo-600 transition">
            All Books
          </Link>
          <Link to="/addBook" className="hover:text-indigo-600 transition">
            Add Book
          </Link>
          <Link
            to="/borrowSummary"
            className="hover:text-indigo-600 transition"
          >
            Borrow Summary
          </Link>
        </div>
      </div>
    </nav>
  );
}
