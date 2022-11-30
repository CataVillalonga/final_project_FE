import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { cartFunc } from "./Modules/Cart"
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Routes/Home'
import Profile from './Auth/Profile'
import Checkout from './Routes/Checkout';
import ProductCategory from './Routes/ProductCategory';
import ProductSubcategory from './Routes/ProductSubcategory';
import Product from './Routes/Product';
import './App.css';

const { getCart } = cartFunc;

function App() {

  const [data, setData] = useState()
  const [cart, setCart] = useState()
  const {user, isAuthenticated } = useAuth0();

  const getProducts = async url => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getProducts('https://cikcreloaded.cyclic.app/api/products')
  },[])
  
  useEffect(() => {
    if (isAuthenticated) {
      const name = user.name.replace(' ','-')
      getCart(name).then((res) => setCart(res))
    }
  },[isAuthenticated, user])

  return (
    <>
    <Routes>
        <Route path="/Checkout" element={<Checkout cart={cart}/>}></Route>
        <Route path="/Profile" element={<Profile data={data} cart={cart}/>}></Route>
        <Route path="/" element={<Home data={data} cart={cart} setCart={setCart}/>}></Route>
        {data?.map((categoryObj, i )=> {
          const {category} = categoryObj
        return <Route path={`/${category}`} element ={<ProductCategory  key={i} cart={cart} setCart={setCart} categoryObj={categoryObj} category={category} data={data}/>} /> 
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map((itemsObj, i) => {
            const {name} = itemsObj
            return <Route path={`/${category}/${itemsObj.name}`} element ={<ProductSubcategory   key={i} cart={cart} setCart={setCart} itemsObj={itemsObj} category={category} name={name} data={data}/>} /> 
          })
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map(itemsObj => {
            const {products} = itemsObj
            return products.map( (item, i) =>{
              return <Route path={`/${category}/${itemsObj.name}/${item.id}`} element ={<Product key={i} cart={cart} item={item} setCart={setCart} data={data}/>} /> 
            })
          })
      })}
    </Routes>
  </>
  );
}

export default App;
