import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Loign from "../components/Loign";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/Blog",
          element:<Blog/>
        },
        {
          path:"/books/:id",
          element:<SingleBook/>,
          loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)
        },
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-book/:id",
          element:<EditBook/>,
          loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)
        }
      ]
    },{
      path:"sign-up",
      element:<SignUp/>
    },{
      path:"/login",
      element:<Loign/>
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);
  export default router;