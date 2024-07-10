import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Page from './components/Page'
import Header from './components/Header'
import { ThemeContext } from './contexts/theme'
import Product from './components/Product'
import Counter from './components/Counter'

import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from './reducers/productSlice'

function App() {

  const [theme, setTheme] = useState('Light')
  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }
  const dispatch=useDispatch()
    useEffect(() => {
        fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4')
            .then((res) => { return res.json() })
            .then((json) => {
                dispatch(addProduct(json))
            })
            .catch()
    }, [])
  
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  
  return (<>
     
      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        <Header />
        <Outlet/> 
      </ThemeContext.Provider>
      
  </>)
}
export default App










/* import Body from './components/Body'
import Counter from './components/Counter'
import Oper from './components/Oper'
import { CounterContext } from './contexts/count'
*/



// function App() {
  //   const [count, setCount] = useState(0);
  

//   const handleCount = () => { +
//     setCount(count + 1)
//   }

//   return (
//     <>
//     </>

//   )
// }

/*
function App() {
  const Name="Sudhar"
  const Age=21
  const Length=5
  const breadth=5


  return (
    <div>
      <Page/>
      App Component<br/>
      Name: {Name}<br/>
      Age: {Age}      
      
      {Body({Name,Age,Length,breadth})} 

      <Counter/>
      {Oper({Length,breadth})}
    </div>
  )
}

 Arrow Function
const App =() =>{
   return(
         <div>App component </div>
 )
 }
*/
