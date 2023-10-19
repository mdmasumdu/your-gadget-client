import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import Login from "../Components/Login/Login";
import Products from "../Components/Products/Products";
import Details from "../Components/Products/Details";
import Update from "../Components/Update/Update";
import Cart from "../Components/Carts/Cart";
import Registration from "../Components/Registration/Registration";
import Privateroute from "../Components/Privateroute";

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
                element:<Privateroute><AddProduct></AddProduct></Privateroute>
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
                element:<Privateroute><Details></Details></Privateroute>
            },
            {
                path:"/update/:id",
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
                element:<Update></Update>
            }
            ,
            {
                path:"/mycart",
                loader:()=>fetch('http://localhost:5000/cart'),
                element:<Privateroute><Cart></Cart></Privateroute>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            }
            
        ]
    }
])

export default route;