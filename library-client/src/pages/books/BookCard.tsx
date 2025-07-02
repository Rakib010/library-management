import { Button } from "@/components/ui/button";
import type { BookFormValues } from "@/types";

export default function BookCard({ book }: { book: BookFormValues }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-2">
      <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600">Author: {book.author}</p>
      <p className="text-sm text-gray-600">Genre: {book.genre}</p>
      <p className="text-sm text-gray-600">ISBN: {book.isbn}</p>
      <p className="text-sm text-gray-600">Copies: {book.copies}</p>
      <p className="text-sm">
        Availability:{" "}
        <span className={book.available ? "text-green-600" : "text-red-600"}>
          {book.available ? "Available" : "Not Available"}
        </span>
      </p>

      {/* Action buttons (just UI) */}
      <div className="flex flex-wrap gap-2 pt-2">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
        <Button size="sm">Borrow</Button>
      </div>
    </div>
  );
}
