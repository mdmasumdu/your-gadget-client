/* eslint-disable react/prop-types */

const Product = ({phone}) => {
    console.log(phone);
    const {brandname,photo,productname,rating,shortdescription}=phone
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
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Product;