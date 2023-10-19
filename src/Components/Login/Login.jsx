import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

  const {login,googlesignin} = useContext(AuthContext)

  const location = useLocation()

  const navigate = useNavigate()

  console.log(location)

  console.log()


  // login with email and password
  const loginhandler =(e)=>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email,password)
    .then(res=>{
      console.log(res)
      Swal.fire({
        title: 'succses!',
        text: `succesfully logged in`,
        icon: 'successa',
        confirmButtonText: 'quit'
      })
      location.state ? navigate(`${location?.state}`) : navigate('/');
      
    })
    .catch(err=>{
      Swal.fire({
        title: 'error!',
        text: `${err.message}`,
        icon: 'error',
        confirmButtonText: 'quit'
      })
    })
    console.log(email,password)

  }





  // login with google

  const goolelogin =()=>{
    googlesignin()
    .then(res=>{
      console.log(res)
      Swal.fire({
        title: 'succses!',
        text: `succesfully logged in`,
        icon: 'successa',
        confirmButtonText: 'quit'
      })
     location.state ? navigate(`${location?.state}`) : navigate('/');
    })
    .then(err=>{
      Swal.fire({
        title: 'error!',
        text: `${err.message}`,
        icon: 'error',
        confirmButtonText: 'quit'
      })
      
      console.log(err)})

  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginhandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <div>
                  <p>New here? Please <NavLink className="text-blue-600" to="/registration">Register</NavLink></p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

          <img onClick={goolelogin} className=" ml-5 mb-5 w-10" src={"https://i.ibb.co/9r48Gkm/7611770.png"}></img>
          </div>
        </div>
      </div>
    );
};

export default Login;