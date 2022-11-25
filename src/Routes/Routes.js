import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Products from "../component/Products/Products";
import Main from "../layout/Main/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        {
                path:'/',
                element:<Home></Home>
        },
        {
            path:'/product',
            element:<Products></Products>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
        ]
    },
    {

    }
])