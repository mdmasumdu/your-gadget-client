import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
const Banner = () => {
    return (
        <div>
               
          <div>

       
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


{/* slide-01 */}

<SwiperSlide>
        <div className="flex flex-col-reverse md:flex-row p-5 ">

<div className="flex-1 flex justify-center items-center">

<div>
<h1  className="text-3xl mb-3"><span className="text-red-500 text-5xl">Save</span> up to 30% on IPhone XS</h1>
<h1 className="text-xl font-bold">Regular Price: <del>$700</del></h1>
<h1 className="text-xl mt-3 mb-3 font-bold">Price: $490</h1>
</div>

</div>

<div className="flex-1 flex flex-col items-center gap-10 justify-center">
<h1 className="font-bold text-3xl">Iphone XS</h1>
<img src={"https://i.ibb.co/2jv5Vjg/apple-iphone-xs-max-5-removebg-preview.png"} alt="" />
</div>
</div></SwiperSlide>

{/* slide-02 */}

<SwiperSlide>  
  <div className="flex md:p-5 flex-col-reverse md:flex-row ">

<div className="flex-1 flex justify-center items-center">

<div>
<h1  className="text-3xl mb-3"><span className="text-red-500 text-5xl">Save</span> up to 30% on HP 15s Ryzen</h1>
<h1 className="text-xl font-bold">Regular Price: <del>$1100</del></h1>
<h1 className="text-xl mt-3 mb-3 font-bold">Price: $ 700</h1>

</div>

</div>

<div className="flex-1 flex flex-col items-center gap-10 justify-center">
<h1 className="font-bold text-3xl">HP 15s-eq2618AU Ryzen</h1>
<img src={"https://i.ibb.co/L54pyPw/hp-15s-spruce-blue-02-500x500-removebg-preview.png"} alt="" />
</div>
</div>
</SwiperSlide>

{/* slide-03 */}

<SwiperSlide> 
 <div className="flex flex-col-reverse md:flex-row p-5 ">

<div className="flex-1 flex justify-center items-center">

<div>
<h1  className="text-3xl mb-3"><span className="text-red-500 text-5xl">Save</span> up to 30% on Intel Core i3</h1>
<h1 className="text-xl font-bold">Regular Price: <del>$400</del></h1>
<h1 className="text-xl mt-3 mb-3 font-bold">Price: $280</h1>

</div>

</div>

<div className="flex-1 flex flex-col items-center gap-10 justify-center">
<h1 className="font-bold text-3xl">Intel 10th Gen Core i3 10100F Processor</h1>
<img src={"https://i.ibb.co/M6Stk5t/i3-10100-500x500-removebg-preview.png"} alt="" />
</div>
</div></SwiperSlide>

</Swiper>
</div>
   
        </div>
    );
};

export default Banner; 