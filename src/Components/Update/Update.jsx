import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const product = useLoaderData()
    console.log(product)

    const addproductehandler=(e)=>{
        e.preventDefault()

        const form = e.target;
        const productname = form.productname.value;
    
        const brandname = form.brandname.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortdescription = form.shortdescription.value;
     
        const photo= form.photo.value;

        const updateProduct= {productname,brandname,price,rating,shortdescription,photo}
        console.log(updateProduct)

        fetch(`http://localhost:5000/update/${product._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updateProduct)
           })
           .then(res=>res.json())
           .then(data=> {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'success!',
                    text: 'succsesfully updated',
                    icon: 'success',
                    confirmButtonText: 'quit'
                  })
            }
            form.reset()
           })
    }
 
    return (
        <div className=" p-10">
            <h1 className="text-4xl text-center text-black pt-5 pb-5">Update a Product</h1>
            <form onSubmit={addproductehandler}>

                {/* form productname and brandname row */}
                  <div className="md:flex justify-center gap-5 text-black">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Product NAME</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Product NAME" defaultValue={product.productname} name="productname" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Brand Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Brand Name" defaultValue={product.brandname} name="brandname" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
               
                  
                  </div>
                {/* form Price and rating row */}
                  <div className="md:flex justify-center gap-5 text-black">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Price" defaultValue={product.price} name="price" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                          
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Rating</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="give rating on 10" defaultValue={product.rating} name="rating" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                       
               
                  
                  </div>
                {/* short description*/}
                  <div className="justify-center gap-5 text-black">
                      
                  <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text text-black">Short description</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="short description" defaultValue={product.shortdescription} name="shortdescription" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                     
               
                  
                  </div>
                {/* form photo row */}
                  <div className="justify-center gap-5 text-black">
                        <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text text-black">PhotoURL</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="PhotoURL" defaultValue={product.photo} name="photo" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                  </div>
                  <input type="submit" value="Update" className="btn btn-block mt-5" />
            </form>
            
        </div>
    );
};

export default Update;