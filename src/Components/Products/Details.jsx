import { useLoaderData } from "react-router-dom";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swal from "sweetalert2";

const Details = () => {

    const phone = useLoaderData()
    const {brandname,photo,productname,rating,shortdescription,price}=phone;
       


    const addtocartHanler =(pho)=>{
 const {productname,brandname,photo,price,rating,shortdescription} =pho ;

      const newpho ={productname,brandname,photo,price,rating,shortdescription}
      
      console.log(pho)
      fetch('https://your-gadget-server-kvo0z1abw-md-masums-projects.vercel.app/cart',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(newpho)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
        return  Swal.fire({
              title: 'success!',
              text: 'Added to cart',
              icon: 'success',
              confirmButtonText: 'quit'
            })
      }
        

      })

      
    }
    return (
      <div>  
       <div className="card lg:card-side  p-5 shadow-2xl mt-10">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <div>
    <h2 className="card-title font-bold">{brandname}</h2>
    <p><span className="font-bold text-xl">Productname:</span> {productname}</p>
    <p><span className="font-bold text-xl">Description:</span> {shortdescription}</p>
    <h1><span className="font-bold text-xl">Rating:</span> {rating}</h1>
    <h1><span className="font-bold text-xl">Price: </span> $ {price}</h1>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>addtocartHanler(phone)}>ADD TO CART</button>
    </div>
  </div>
</div>
      </div>
 
    );
};

export default Details;