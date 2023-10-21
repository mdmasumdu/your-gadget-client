import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

const Products = () => {
    const products = useLoaderData();
    const {brand} = useParams()

   console.log(brand.toLowerCase())

    const dphones = products?.filter(product=> brand.toLowerCase()===product.brandname.toLowerCase())
    console.log(dphones)

    return (
        <div className="min-h-screen">
        
          
          <div className="md:w-1/3 mx-auto mt-10">

       
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

        {
            dphones  ==  '' ? <p><h1 className="text-center font-bold text-5xl mt-10 text-red-600">This brand Does not has any product</h1>  </p> :<h1 className="text-center font-bold text-3xl mt-10">Availble Products</h1> 
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