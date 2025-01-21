import { createBrowserRouter, useRoutes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Item from "../pages/Item";

export const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'item',
                    element: <Item />
                },
            ]
        }
    ])
}

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'item',
                element: <Item />
            },
        ]
    }
])