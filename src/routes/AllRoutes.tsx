import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";

import Login from "../pages/loginpage/Login";
import NotesPage from "../pages/notespage/NotesPage";
import Home from "../pages/homepage/Home";

const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/notes",
          element: <NotesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AllRoutes;
