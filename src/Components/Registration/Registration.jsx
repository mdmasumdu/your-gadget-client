import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {

const {createuser,update}= useContext(AuthContext);


    const registerhandler=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name =form.name.value;
        const email = form.email.value;
        const password= form.password.value;
        const photo = form.photo.value

        if(password.length < 6){
         return Swal.fire({
                title: 'error!',
                text: `Password length must be 6 character or long`,
                icon: 'error',
                confirmButtonText: 'quit'
              })

        }

        else if(!/[A-Z]/.test(password)){
            return   Swal.fire({
                title: 'error!',
                text: `Password length must have a  capital letter`,
                icon: 'error',
                confirmButtonText: 'quit'
              })
        }

        else if(!/[!@#$%&]/.test(password)){
            return   Swal.fire({
                title: 'error!',
                text: `Password length must have a special character`,
                icon: 'error',
                confirmButtonText: 'quit'
              })

        }
        
             createuser(email,password)
             .then(res=>{
                if(res.user){
                    update(name,photo)
                    .then(()=>{})
                    .catch(()=>{})

                    Swal.fire({
                        title: 'success!',
                        text: 'succesfully registered',
                        icon: 'success',
                        confirmButtonText: 'quit'
                      })
                }
             })
             .catch(err=>{
                Swal.fire({
                    title: 'error!',
                    text: `${err.message}`,
                    icon: 'error',
                    confirmButtonText: 'quit'
                  })
             })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={registerhandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoLink</span>
                </label>
                <input type="text" placeholder="PhotoLink" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;