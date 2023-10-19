import { useEffect, useState } from "react";
import Best from "./Best";


const BestSelling = () => {
const[bests,setBests] =useState([])
    useEffect(()=>{
        fetch('Best.json')
        .then(res=>res.json())
        .then(data=>setBests(data))
    },[])

    console.log(bests)
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 mb-10">Our Best Selling Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    bests.map((best,idx)=><Best key={idx} best={best}></Best>)
                }
            </div>
        </div>
    );
};

export default BestSelling;