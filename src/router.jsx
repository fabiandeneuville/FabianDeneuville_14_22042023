import {createBrowserRouter} from 'react-router-dom';

import Home from "./pages/Home";
import Employees from "./pages/Employees";
import NotFound from './pages/404';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/employees",
        element: <Employees/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;