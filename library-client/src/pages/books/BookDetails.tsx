import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data: bookData, isLoading, error } = useGetSingleBookQuery(bookId);

  const book = bookData?.data;

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error || !book)
    return <p className="text-center text-red-600">Book not found.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Cover Image */}
          <img
            src={
              book.coverImage ||
              "https://via.placeholder.com/200x280?text=No+Image"
            }
            alt={book.title}
            className="w-[200px] h-[280px] object-cover rounded-lg shadow-md border"
          />

          {/* Info */}
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-extrabold text-indigo-700 text-center md:text-left">
              {book.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              <div>
                <p>
                  <span className="font-semibold text-gray-600">Author:</span>{" "}
                  {book.author}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Genre:</span>{" "}
                  {book.genre}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">ISBN:</span>{" "}
                  {book.isbn}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold text-gray-600">Copies:</span>{" "}
                  {book.copies}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Status:</span>{" "}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      book.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {book.available ? "Available" : "Not Available"}
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
