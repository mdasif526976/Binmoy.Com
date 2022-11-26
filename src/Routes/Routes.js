import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../component/AdminPage/AdminPage";
import AddProduct from "../component/AdminRoutes/AddProduct/AddProduct";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Products from "../component/Products/Products";
import Signup from "../component/Signup/Signup";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main/Main";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
            path:'/product/:id',
            element:<Products></Products>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        }
        ]
    },
    {

    },
    {
   path:'/dashboard',
   element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
   children:[
    {
        path:'/dashboard/admin',
        element:<AdminPage></AdminPage>
    },
    {
        path:'/dashboard/admin/addProduct',
        element:<AddProduct></AddProduct>
    }
   ]
    },
])