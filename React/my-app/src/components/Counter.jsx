import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/theme";
import { CounterContext } from "../contexts/count";
import { useDispatch, useSelector } from "react-redux";
import { increment ,decrement} from "../reducers/counterSlice";
import { addi } from "../reducers/addSlice";
function Counter(){
    // const {count,handleCount}=useContext(CounterContext)
    const a=useSelector((state)=>state.adder.a)

    const [val,setVal]=useState(0)
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()

    const handleVal=(e)=>{
        console.log(e.target.value)
        setVal(e.target.value)
    }

    const Increm=()=>{
        dispatch(increment())
    } 
    const Adde=()=>{
        dispatch(addi(parseInt(val)))
    }
    return(
        <>
        <div>Counter : {count}</div>
        <button className="btn btn-success" onClick={Increm}>+</button>
        <button className="btn btn-danger" onClick={()=>dispatch(decrement())}>-</button>
        <br/>
        <div>ADDED : {a}</div>
        <input type="Number" value={val} onChange={
handleVal
        }/>
        <button onClick={Adde}>Submit</button>
        <br/>
        
        </>
    )
}

export default Counter;