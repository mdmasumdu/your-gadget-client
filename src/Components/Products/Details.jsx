import { useLoaderData } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

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
      console.log(pho)
      fetch('http://localhost:5000/cart',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(pho)
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
        <div className="w-1/2 mx-auto mt-10">
         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      
      <SwiperSlide><img src={'https://i.ibb.co/GVrRySQ/3936530.jpg'} alt="" /></SwiperSlide>
    

    <SwiperSlide><img src={'https://i.ibb.co/7pyHhfy/7857966.jpg'} alt="" /></SwiperSlide>
    <SwiperSlide><img src={"https://i.ibb.co/mHrGdWt/198279-OYNXAW-589.jpg"} alt="" /></SwiperSlide>
     
  </Swiper>
  </div>

       
       <div className="card lg:card-side border border-red-700 p-5 shadow-2xl mt-10">
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