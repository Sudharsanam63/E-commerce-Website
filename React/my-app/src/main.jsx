import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Provider} from "react-redux";
import {store} from "./store.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart.jsx';
import Counter from './components/Counter.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route  path="/" element={<Product/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
        <Route path="/counter" element={<Counter/>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
