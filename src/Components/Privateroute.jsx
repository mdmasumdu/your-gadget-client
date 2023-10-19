/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    const location = useLocation()

     if(loading){
        return <div className="flex justify-center min-h-screen ">
            <span className=" md:w-20 loading loading-spinner text-success"></span>
            </div>
     }
     
    if(user){
      return  children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
    
};

export default Privateroute;