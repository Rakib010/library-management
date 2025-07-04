import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import f4 from "../../assets/f4.webp";

const featuredBooks = [
  {
    _id: "6855892d9b2964c3a2916c04",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    coverImage: f1,
    badge: "Popular",
  },
  {
    _id: "68672e3d7c7b560ae0cb3388",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    coverImage: f2,
    badge: "Recommended",
  },
  {
    _id: "68674850bcd35e5ce15cfada",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    coverImage: f4,
    badge: "New",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="w-11/12 mx-auto py-10 px-4 md:px-10 my-16 bg-[#F7F9EB] rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📚 Featured Books This Week
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {featuredBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 flex flex-col overflow-hidden"
          >
            {/* Image Section */}
            <div className="h-56 w-full bg-gray-50 flex items-center justify-center p-4">
              <img
                src={book.coverImage}
                alt={book.title}
                className="h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full">
                  {book.badge}
                </span>
              </div>

              <div className="mt-5">
                <Button
                  size="sm"
                  asChild
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                >
                  <Link to={`/bookDetails/${book._id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
