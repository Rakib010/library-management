import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);
  const borrowedBooks = data?.data || [];

  return (
    <div className="max-w-4xl mx-auto px-6 my-10">
      <h1 className="text-4xl font-bold text-center mb-10 tracking-wide text-gray-900">
        📊 Borrow Summary
      </h1>

      {isLoading && (
        <p className="text-center text-gray-500 italic mb-6 animate-pulse">
          Loading summary...
        </p>
      )}

      {borrowedBooks.length === 0 && !isLoading && (
        <p className="text-center text-gray-400 italic">
          No borrow records found.
        </p>
      )}

      <div className="space-y-6">
        {borrowedBooks.map((borrow: BorrowFormValues, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-between p-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4 max-w-lg">
              <div className="text-indigo-600 text-3xl select-none">📚</div>

              <div className="truncate">
                <p
                  className="font-semibold text-lg text-gray-900 truncate"
                  title={borrow.book?.title}
                >
                  {borrow.book?.title || "N/A"}
                </p>
                <p
                  className="text-sm text-gray-500 truncate"
                  title={borrow.book?.isbn}
                >
                  ISBN: {borrow.book?.isbn || "N/A"}
                </p>
              </div>
            </div>

            <div className="text-indigo-700 font-bold text-lg select-none">
              {borrow.totalQuantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
