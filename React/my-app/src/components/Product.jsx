import { useEffect, useState } from "react";
import Productcard from "./Productcard";
import './Productcard.css'
import Topbar from "./Topbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/productSlice";
import { useSelector } from "react-redux";

function Product() {
    const list =useSelector((state)=>state.product.products1);
    
    return (
        <>
            <div className="paren">
                {list.map((x) => <Productcard product={x} />)}
            </div>
        </>
    )
}

export default Product;