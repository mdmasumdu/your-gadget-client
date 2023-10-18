/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Abrand = ({brand}) => {
 const navigate = useNavigate();
 

    const producthandler=(brand)=>{

        navigate(`/product/${brand}`)
    }
    return (
        <div onClick={()=>producthandler(brand.brand)} className="flex justify-center flex-col items-center shadow-2xl bg-slate-300 p-2">
            <img className="w-44 h-48" src={brand.image_url} alt="" />
            <h1 className="badge badge-secondary p-5 mt-5 mb-5"> Brand: {brand.brand}</h1>
        </div>
    );
};

export default Abrand;