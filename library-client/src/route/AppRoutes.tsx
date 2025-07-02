import App from "@/App";
import AddBooks from "@/pages/books/AddBook";
import AllBooks from "@/pages/books/AllBooks";
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
        element: <AddBooks />,
      },
    ],
  },
]);
