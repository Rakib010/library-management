export default function BorrowSummary() {
  // Placeholder data — replace with real data fetched from your API
  const borrowedBooks = [
    { title: "Book One", isbn: "1234567890", totalQuantity: 15 },
    { title: "Book Two", isbn: "0987654321", totalQuantity: 7 },
    { title: "Book Three", isbn: "1122334455", totalQuantity: 20 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Borrow Summary</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Book Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">ISBN</th>
            <th className="border border-gray-300 px-4 py-2 text-right">
              Total Quantity Borrowed
            </th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                No borrow records found.
              </td>
            </tr>
          ) : (
            borrowedBooks.map(({ title, isbn, totalQuantity }, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{title}</td>
                <td className="border border-gray-300 px-4 py-2">{isbn}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  {totalQuantity}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
