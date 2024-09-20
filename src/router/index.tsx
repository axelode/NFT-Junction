import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";

const route = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);

export default route;