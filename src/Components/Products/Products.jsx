import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const products = useLoaderData();
    const {brand} = useParams()

   console.log(brand.toLowerCase())

    const dphones = products.filter(product=> brand.toLowerCase()===product.brandname.toLowerCase())
    console.log(dphones)

    return (
        <div className="min-h-screen">
          {
            dphones  ==  '' ? <p><h1 className="text-center font-bold text-3xl mt-10">This brand Does not has any product</h1>  </p> :<h1 className="text-center font-bold text-3xl mt-10">Availble Products</h1> 
          }
          
          <div className="grid md:grid-cols-3 mt-10 gap-10 mb-10 p-5">
          {
                dphones?.map(phone=><Product key={phone._id} phone={phone}></Product>)
            }
          </div>
        </div>
    );
};

export default Products;