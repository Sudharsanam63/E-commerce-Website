import { useDispatch } from 'react-redux'
import './Productcard.css'
import { itemsAdded } from '../reducers/cartSlice'

const Productcard = (props) => {
    console.log(props.product)
    const { title, description, price, image } = props.product || {}
    const dispatch = useDispatch()
    const addItems = () => {
        dispatch(itemsAdded(props.product))
    }
    return (
        <div className="paren">
            <div className="product-card">
                <img src={image} className='im' />
                <div className='mstr'>
                    <div className='titl'>{title}</div>
                    <div className='des'>{description}</div>
                    <div className='pri'>${price}</div>
                    <button className='add-to-cart-btn' onClick={addItems}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Productcard
