import { useDeleteBookMutation, useGetBookQuery } from "@/redux/api/baseApi";

import type { BookFormValues } from "@/types";
import { BookCard } from "./BookCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AllBooks = () => {
  const [page, setPage] = useState(1);
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBookQuery(page, {
    pollingInterval: 1000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = (id: string) => {
    deleteBook(id);
  };

  return (
    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 md:my-10">
      {isLoading && <p>Loading books...</p>}
      {isError && <p>Failed to load books.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!isLoading &&
          books?.data?.map((book: BookFormValues, index: number) => (
            <BookCard key={index} book={book} onDelete={handleDelete} />
          ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          ← Previous
        </Button>
        <span className="text-sm font-medium text-gray-700">Page {page}</span>
        <Button
          onClick={() => setPage(page + 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow-md"
        >
          Next →
        </Button>
      </div>
    </div>
  );
};
