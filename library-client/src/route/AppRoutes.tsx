import App from "@/App";
import { AddBook } from "@/pages/books/AddBook";
import { AllBooks } from "@/pages/books/AllBooks";
import BookDetails from "@/pages/books/BookDetails";
import { UpdatedBooks } from "@/pages/books/updatedBooks";
import BorrowSummary from "@/pages/borrow/BorrowSummary";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/allBooks",
        element: <AllBooks />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/editBook/:bookId",
        element: <UpdatedBooks />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
      },
      {
        path: "/borrowSummary",
        element: <BorrowSummary />,
      },
    ],
  },
]);
