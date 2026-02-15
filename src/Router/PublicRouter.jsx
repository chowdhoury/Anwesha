import { createBrowserRouter } from "react-router";
import PublicLayout from "../Layout/PublicLayout";
import HomePage from "../Pages/HomePage/HomePage";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
