import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../Pages/Home";
import NotFound from "./../Pages/404";
import Login from "../components/User/Login/Login";
import SignUp from "../components/User/SingUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/signup",
        element: <SignUp />,
      },
      //   404 page:
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
