/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Product = ({phone}) => {
    const {_id,brandname,photo,productname,rating,shortdescription}=phone;

    const navigate = useNavigate()
    const detailhandler =(id)=>{
        navigate(`/details/${id}`)
    }
    console.log(phone);
   
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl h-72" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{productname}</h2>
    <p>{brandname}</p>
    <h1>Rating:{rating}</h1>
    <p>{shortdescription}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={()=>detailhandler(_id)}>Details</button>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Product;