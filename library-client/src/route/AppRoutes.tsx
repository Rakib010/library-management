import App from "@/App";
import { AddBook } from "@/pages/books/AddBook";
import { AllBooks } from "@/pages/books/AllBooks";
import BookDetails from "@/pages/books/BookDetails";
import { UpdatedBooks } from "@/pages/books/UpdatedBooks";
import BorrowSummary from "@/pages/borrow/BorrowSummary";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
