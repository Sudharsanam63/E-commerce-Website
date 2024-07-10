
import { useState,useEffect } from 'react';
import './Page.css'
import Themebutton from './Themebutton';
import {Link} from 'react-router-dom'
import file from '../assets/file.png'
import Topbar from './Topbar';
import { categoryProduct } from '../reducers/productSlice';
import { addProduct } from '../reducers/productSlice';
import { useSelector,useDispatch } from 'react-redux';



function Header(props){
    const cartItems = useSelector((state)=>state.cart.items)
    const product = useSelector((state)=>state.product.products1)
    
    const [selectedcategory, setSelectedcategories] = useState("");
    const [selectedtitle, setSelectedtitle] = useState("");

    // useEffect(() => {
    //     if (selectedcategory === "")
    //         setList(apiRes)
    //     else {
    //         const res = apiRes.filter((x) => x.category === selectedcategory)
    //         setList(res)
    //     }
    // }, [selectedcategory])
    // useEffect(() => {
    //     if (selectedtitle === "")
    //         setList(apiRes)
    //     else {
    //         const res = apiRes.filter((x) => x.title.toLowerCase().includes(selectedtitle.toLowerCase()))
    //         // const res = apiRes.filter((x) => x.title===selectedtitle)
    //         console.log(res)
    //         setList(res)
    //     }
    // }, [selectedtitle])


    return(
        <>
        
        <div className="pg vh-20">
            <div><img src={file} width="150px"></img></div>
            <div><Topbar /></div>
            <div>
                <nav>
                    <ul className="pg1">
                        
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>cart</li>
                        <li><Link to="/cart">Cart:{cartItems.length}</Link></li>
                        <li><Themebutton/></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Header;