import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Cart = () => {

    
    const cartitems = useLoaderData()
    const [cartproducts,setcartProducts] = useState(cartitems)




    const deleteHandler =(_id)=>{
        console.log(_id)
        fetch(`https://your-gadget-server-kvo0z1abw-md-masums-projects.vercel.app/cart/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                const remaining = cartproducts.filter(cartproduct=> cartproduct._id !== _id)
                 setcartProducts(remaining)
            }
        })

    }
    return (
        <div className="min-h-screen">
            
            {
                
                
                cartproducts == '' ? <p className="text-center font-bold text-3xl">NO product has been added to cart</p> :
                    <div className="overflow-x-auto">
                      <h1 className="text-center text-4xl font-bold mt-10 mb-10">Your Cart Here</h1>
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Serial</th>
                          <th>Product Name</th>
                          <th>Brand</th>
                          <th>Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                          cartproducts.map((cartitem,idx)=>   
                              <tr  key={cartitem._id} className="text-black">
                                <th>{idx + 1}</th>
                                <td>{cartitem.productname}</td>
                                <td>{cartitem.brandname}</td>
                                <td>{cartitem.price}</td>
                                <td><button className="btn btn-secondary" onClick={()=>deleteHandler(cartitem._id)}>X</button></td>
                              </tr>
                            )
                      }
                      </tbody>
                    </table>
                  </div> 
                
            }

     
        </div>
    );
};

export default Cart;