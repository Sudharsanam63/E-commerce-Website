import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { categoryProduct } from '../reducers/productSlice';

const Topbar = (props) => {
    const [title, setTitle] = useState()
    const category= useSelector((state)=>state.product.categoryhead)
    const dispatch=useDispatch();
    const handleCategory = (e) => {
        dispatch(categoryProduct(e.target.value));
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const passTitle = (e) => {
        props.setSelectedtitle(e.target.value)
    }
    return (
        <><select onChange={handleCategory}>
            <option value="">Select...</option>
            {category.map((c) => <option value={c}>{c}</option>)}
        </select>
            <input type="text" placeholder="Enter Title" value={title}
                onChange={passTitle}>
            </input>
        </>
    )
}

export default Topbar;