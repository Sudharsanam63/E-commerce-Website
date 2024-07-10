import { useDispatch, useSelector } from "react-redux"
import Cartitem from "./Cartitem"
import './Cartitem.css'
import { itemsDelete } from "../reducers/cartSlice"

function Cart() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  return (<>
    <div className="container">
      <ul className="responsive-table">
        <li className="table-header">
          <div >Job Id</div>
          <div >Customer Name</div>
          <div >Amount Due</div>
          <div >Quantity</div>
          <div >Remove</div>
        </li>
        {items.map((x) => {
          return <li className="table-row" key={x.id}>
            <div ><img className="img-1" src={x.image}></img></div>
            <div >{x.title}</div>
            <div >{x.price}</div>
            <div >{x.quantity}</div>
            <div><button className="button-31" onClick={() => { dispatch(itemsDelete(x)) }}>Remove</button></div>
          </li>
        })}
      </ul>
    </div>
  </>)
}

export default Cart