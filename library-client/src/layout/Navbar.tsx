import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f7f9eb] shadow-md">
      <div className="w-11/12 mx-auto px-4 py-4 flex justify-between items-center">
      
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="text-indigo-600 w-6 h-6" />
          <h1 className="text-2xl font-bold text-indigo-700 tracking-wide">
            Next <span className="text-yellow-500">Page</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-indigo-600 transition">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm text-gray-700 font-medium">
          <Link
            to="/"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/allBooks"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            All Books
          </Link>
          <Link
            to="/addBook"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Add Book
          </Link>
          <Link
            to="/borrowSummary"
            className="block hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Borrow Summary
          </Link>
        </div>
      )}
    </nav>
  );
}
