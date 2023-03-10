import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../component/AdminPage/AdminPage";
import ReportProduct from "../component/AdminPage/ReportProduct/ReportProduct";
import AddProduct from "../component/AdminRoutes/AddProduct/AddProduct";
import AllUserAdmin from "../component/AdminRoutes/AllUserAdmin/AllUserAdmin";
import Blog from "../component/blog/Blog";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import MyCart from "../component/MyCart/MyCart";
import Payment from "../component/Payment/Payment";
import Products from "../component/Products/Products";
import SellerAllProduct from "../component/SellerAllProduct/SellerAllProduct";
import Signup from "../component/Signup/Signup";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main/Main";
import Error from "../shered/Error";
import AdminProtect from "./AdminProtect/AdminProtect";
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
            element:<PrivateRoutes><Products></Products></PrivateRoutes>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
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
        path:'/dashboard',
        element:<MyCart></MyCart>
    },
    {
        path:'/dashboard/admin',
        element:<AdminProtect><AdminPage></AdminPage></AdminProtect>
    },
    {
        path:'/dashboard/admin/users',
        element:<AdminProtect><AllUserAdmin></AllUserAdmin></AdminProtect>
    },
    {
        path:'/dashboard/admin/report',
        element:<AdminProtect><ReportProduct></ReportProduct></AdminProtect>
    },
    {
        path:'/dashboard/Payment/:id',
        element:<Payment></Payment>,
        loader:({params})=> fetch(`https://server-sites.vercel.app/order/${params.id}`)
    },
    {
        path:'/dashboard/seller/addProduct',
        element:<AddProduct></AddProduct>
    },
    {
        path:'/dashboard/seller/allProduct',
        element:<SellerAllProduct></SellerAllProduct>
    }
   ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])