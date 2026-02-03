import { createBrowserRouter } from "react-router";
import PublicLayout from "../Layout/PublicLayout";

export const router=createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path:"/",
                element:<h2>Home Page</h2>
            }
        ]
    }

])