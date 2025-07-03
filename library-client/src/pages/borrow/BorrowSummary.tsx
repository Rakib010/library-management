import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";
import type { BorrowFormValues } from "@/types";

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);
  const borrowedBooks = data?.data || [];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-gradient-to-tr from-purple-50 via-indigo-50 to-blue-50 p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 tracking-wide">
          📊 Borrow Summary
        </h1>

        <div className="overflow-x-auto rounded-xl shadow-md bg-white">
          <table className="min-w-full table-auto border-separate border-spacing-y-2">
            <thead className="bg-indigo-600 text-white rounded-lg">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold rounded-l-lg">
                  📖 Book Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  🔢 ISBN
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold rounded-r-lg">
                  📦 Total Borrowed
                </th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center text-gray-500 py-6">
                    No borrow records found.
                  </td>
                </tr>
              ) : (
                borrowedBooks.map((borrow: BorrowFormValues, index: number) => (
                  <tr
                    key={index}
                    className="bg-white hover:bg-indigo-50 transition-all duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                      {borrow.book?.title || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {borrow.book?.isbn || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm text-right font-semibold text-indigo-700">
                      {borrow.totalQuantity}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {isLoading && (
          <p className="text-center mt-6 text-sm text-gray-500">
            Loading summary...
          </p>
        )}
      </div>
    </div>
  );
}
