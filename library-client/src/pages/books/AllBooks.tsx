import { useDeleteBookMutation, useGetBookQuery } from "@/redux/api/baseApi";

import type { BookFormValues } from "@/types";
import { BookCard } from "./BookCard";

export const AllBooks = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBookQuery(undefined, {
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
    </div>
  );
};
