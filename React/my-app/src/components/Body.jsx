import 'bootstrap/dist/css/bootstrap.min.css'


function Body(props){
    console.log(props)
    return(
        <>
        <div className="text-info">
            <div>Body Component</div>
            <p>Name : {props.Name}</p>
            <p>Age  :{props.Age}</p>
            <p>calc :{props.Length * props.breadth}</p>
        </div>
        </>
    )
}

export default Body;