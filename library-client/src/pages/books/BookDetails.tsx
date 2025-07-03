import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams(); // Get bookId from URL
  const { data: bookData, isLoading, error } = useGetSingleBookQuery(bookId); // Fetch specific book

  const book = bookData?.data;

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error || !book)
    return <p className="text-center text-red-600">Book not found.</p>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-indigo-700">{book.title}</h2>
      <p className="text-gray-700">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="text-gray-700">
        <strong>Genre:</strong> {book.genre}
      </p>
      <p className="text-gray-700">
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p className="text-gray-700">
        <strong>Description:</strong> {book.description}
      </p>
      <p className="text-gray-700">
        <strong>Copies:</strong> {book.copies}
      </p>
      <p className="text-gray-700">
        <strong>Status:</strong>{" "}
        <span className={book.available ? "text-green-600" : "text-red-600"}>
          {book.available ? "Available" : "Not Available"}
        </span>
      </p>
    </div>
  );
};

export default BookDetails;
