import { useState } from "react";
function Oper(props) {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [res, setRes] = useState(0);

    function numb1(e) {
        setNum1(Number(e.target.value))
    }
    function numb2(e) {
        setNum2(Number(e.target.value))
    }


    const [ope, setOpe] = useState();
    const [num, setNum] = useState(0);
    function add() {
        setOpe("+");
        setNum(props.Length + props.breadth)
    }
    function sub() {
        setOpe("-");
        setNum(props.Length - props.breadth)
    }
    function mul() {
        setOpe("*");
        setNum(props.Length * props.breadth)
    }
    function div() {
        setOpe("/");
        setNum(props.Length / props.breadth)
    }

    function add1() {
        setRes(Number(num1) + Number(num2))
    }
    function sub1() {
        setRes(num1 - num2)
    }
    function mul1() {
        setRes(num1 * num2)
    }
    function div1() {
        setRes(num1 / num2)
    }
    return (
        <>
            <div>{ope} oper value : {num}</div>
            <button className="btn btn-success m-1" onClick={add}>+</button>
            <button className="btn btn-danger m-1" onClick={sub}>-</button>
            <button className="btn btn-danger m-1" onClick={mul}>*</button>
            <button className="btn btn-danger m-1" onClick={div}>/</button>
            <br />
            <div className="m-3 p-3">
                <h3>Calculator </h3>
                <input type="Number" value={num1} onChange={numb1} placeholder="enter number 1"></input><br />
                <input type="Number" value={num2} onChange={numb2} placeholder="enter number 2"></input><br />
                <button className="btn btn-success m-1" onClick={add1}>+</button>
                <button className="btn btn-danger m-1" onClick={sub1}>-</button>
                <button className="btn btn-danger m-1" onClick={mul1}>*</button>
                <button className="btn btn-danger m-1" onClick={div1}>/</button>

                <p>Result : {res}</p>
            </div>
        </>
    )
}

export default Oper;