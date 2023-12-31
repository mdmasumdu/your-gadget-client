/* eslint-disable react/prop-types */


const Best = ({best}) => {
    return (
        <div className="card bg-slate-50 shadow-xl">
  <div className="card-body items-center">
    <h2 className="card-title">{best.product_name}</h2>
    <p>Price: $ {best.price}</p>
  </div>
  <figure><img className="h-72" src={best.img} alt="Shoes" /></figure>
</div>
    );
};

export default Best;