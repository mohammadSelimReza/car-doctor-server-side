import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../Pages/Home";
import NotFound from "./../Pages/404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   404 page:
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
