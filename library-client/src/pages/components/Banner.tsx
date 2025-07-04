import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div>
      <section className="w-full py-16 px-6 my-16 md:px-24 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#F7F9EB] to-[#E4E7D2]">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg max-w-md mb-6 drop-shadow-sm">
            Explore thousands of books from every genre, carefully curated for
            book lovers like you.
          </p>
          <Button
            asChild
            className="bg-white text-indigo-700 font-semibold hover:bg-indigo-100 transition"
          >
            <Link to="/allBooks">Browse All Books</Link>
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
          alt="Bookshelf"
          className="rounded-lg shadow-xl w-full max-w-md object-cover"
          loading="lazy"
        />
      </section>
    </div>
  );
}
