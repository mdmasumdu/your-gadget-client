/* eslint-disable react/prop-types */


const Best = ({best}) => {
    return (
        <div className="card  shadow-xl">
  <div className="card-body items-center">
    <h2 className="card-title">{best.product_name}</h2>
    <p>{best.price}</p>
  </div>
  <figure><img src={best.img} alt="Shoes" /></figure>
</div>
    );
};

export default Best;