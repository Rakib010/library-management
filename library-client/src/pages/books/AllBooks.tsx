import { useDeleteBookMutation, useGetBookQuery } from "@/redux/api/baseApi";

import type { BookFormValues } from "@/types";
import { BookCard } from "./BookCard";

export const AllBooks = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBookQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    pollingInterval: 1000,
  });
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = (id: string) => {
    deleteBook(id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Books</h2>

      {isLoading && <p>Loading books...</p>}
      {isError && <p>Failed to load books.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {!isLoading &&
          books?.data?.map((book: BookFormValues, index: number) => (
            <BookCard key={index} book={book} onDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
};
