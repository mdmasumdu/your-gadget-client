import Swal from "sweetalert2";


const AddProduct = () => {
    const addproductehandler=(e)=>{
        e.preventDefault()

        const form = e.target;
        const productname = form.productname.value;
    
        const brandname = form.brandname.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortdescription = form.shortdescription.value;
     
        const photo= form.photo.value;

        const newProduct= {productname,brandname,price,rating,shortdescription,photo}
        console.log(newProduct)

        fetch('http://localhost:5000/addproduct',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newProduct)
           })
           .then(res=>res.json())
           .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'succsesfully added',
                    icon: 'success',
                    confirmButtonText: 'quit'
                  })
            }
            form.reset()
           })
    }
    return (
        <div className=" p-10 bg-slate-50">
            <h1 className="text-4xl text-center text-black pt-5 pb-5">Add a Product</h1>
            <form onSubmit={addproductehandler}>

                {/* form productname and brandname row */}
                  <div className="md:flex justify-center gap-5 text-black">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Product NAME</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Product NAME" name="productname" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Brand Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Brand Name" name="brandname" className="input input-bordered md:w-full bg-[#F4F3F0]" />
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
                        <input type="text" placeholder="Price" name="price" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                          
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Rating</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="give rating on 10" name="rating" className="input input-bordered md:w-full bg-[#F4F3F0]" />
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
                        <input type="text" placeholder="short description" name="shortdescription" className="input input-bordered md:w-full bg-[#F4F3F0]" />
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
                        <input type="text" placeholder="PhotoURL" name="photo" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                  </div>
                  <input type="submit" value="ADD Product" className="btn btn-block mt-5" />
            </form>
            
        </div>
    );
};

export default AddProduct;