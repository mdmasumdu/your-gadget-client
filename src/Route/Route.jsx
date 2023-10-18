import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import Login from "../Components/Login/Login";
import Products from "../Components/Products/Products";
import Details from "../Components/Products/Details";

const route =createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/addproduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/product/:brand",
                loader:()=>fetch('http://localhost:5000/products'),
                element:<Products></Products>
            },
            {
                path:"/details/:id",
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
                element:<Details></Details>
            }
        ]
    }
])

export default route;