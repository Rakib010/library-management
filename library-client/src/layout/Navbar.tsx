import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <BookOpen className="text-indigo-600 w-6 h-6" />
        <h1 className="text-2xl font-bold text-indigo-700">ReadHive</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/allBooks">All Books</Link>
        <Link to="/addBook">Add Book</Link>
        <Link to="/borrowSummary">Borrow Summary</Link>
      </div>
    </nav>
  );
}
