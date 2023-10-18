import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const products = useLoaderData();
    const {brand} = useParams()

   console.log(brand.toLowerCase())

    const dphones = products.filter(product=> brand.toLowerCase()===product.brandname.toLowerCase())
    console.log(dphones)

    return (
        <div>
       
          <div className="grid md:grid-cols-3 mt-10">
          {
                dphones?.map(phone=><Product key={phone._id} phone={phone}></Product>)
            }
          </div>
        </div>
    );
};

export default Products;