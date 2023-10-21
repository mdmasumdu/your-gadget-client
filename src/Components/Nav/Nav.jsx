import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Nav = () => {
      const {user,logout}= useContext(AuthContext);

    const links =<>
      <NavLink className={({isActive})=>isActive ? 'text-green-700 underline': ''} to={`/`}>Home</NavLink>
      <NavLink  className={({isActive})=>isActive ? 'text-green-700 underline': ''} to={`/addproduct`}>ADD-Product</NavLink>
      <NavLink  className={({isActive})=>isActive ? 'text-green-700 underline': ''} to={`/mycart`}>MY-Cart</NavLink>
      {
        user ? "" : <NavLink  className={({isActive})=>isActive ? 'text-green-700 underline': ''} to={`/login`}>Login</NavLink> 
      }   
    </>

// sign out 

const hadnlelogout =()=>{

  logout()
  .then(()=>{})
  .catch(()=>{})
}
console.log(user)  
    return (
        <div className="navbar shadow p-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 text-black">
              {links}
            </ul>
          </div>
          <a><img className="w-20" src={'https://i.ibb.co/cX99X8G/logo-removebg-preview.png'} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 text-xl font-bold">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
         {
          user ? <div className="dropdown dropdown-end flex flex-col items-center">
            <h1>{user.displayName}</h1>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">

            <button onClick={hadnlelogout}>Logout</button>
          </ul>
        </div> :<button className="text-xl font-bold"> <NavLink  className={({isActive})=>isActive ? 'text-green-700 underline': ''} to="/registration">Registration</NavLink></button>
         }
        
        </div>
      </div>
    );
};

export default Nav;