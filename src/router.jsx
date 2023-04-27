import {createBrowserRouter} from 'react-router-dom';

import Home from "./pages/Home";
import Employees from "./pages/Employees";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/employees",
        element: <Employees/>
    }
]);

export default router;