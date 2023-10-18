
import { useEffect, useState } from "react";
import Abrand from "./Abrand";

const Brand = () => {

    const [brands,setBrand] = useState([])

    useEffect(()=>{
        fetch('Data.json')
        .then(res=>res.json())
        .then(data=>setBrand(data))
    },[])



    return (
        <div className="grid grid-cols-3 gap-5 p-5">
            {
                brands.map((brand,idx)=><Abrand key={idx} brand={brand}></Abrand>)
            }
            
        </div>
    );
};

export default Brand;  