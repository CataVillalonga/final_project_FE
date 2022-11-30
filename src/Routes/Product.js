import Nav from "../Components/Nav"
import Login from "../Auth/Login"
import React, { useState } from "react";
import { addToCart } from "../Modules/Cart"
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/product.css'
function Product({ item, setCart, cart, data }) {

  const {user, isAuthenticated } = useAuth0();
  const [loginAlert , setLoginAlert] = useState(false)
  const [itemAdded , setItemAdded] = useState(null)
  const quantity = [1,2,3,4,5,6,7,8,9]

  const cartHandler = async(e) => {

    e.preventDefault()
    if (!isAuthenticated){
      return setLoginAlert(
      <section className="login-alert">
        <article className="login-message-container">
          <p className="login-message">PLEASE LOGIN TO ADD TO BASKET</p>
          <Login/>
        </article>
      </section>)
    }
    setItemAdded(<p className="item-added">ITEM ADDED TO BASKET</p>)
    setTimeout(() => {
      setItemAdded(null)
    }, 3000)
    const name = user.name.replace(' ','-')
    const updatedCart = await addToCart(name, item)
    setCart(updatedCart)
  }
  return (
    <>
    <Nav cart={cart} setCart={setCart} data={data}/>
    <section className='black-banner'>
    </section>
    <section className="product-container">
      <section className="product-visuals">
        <h3 className="mobile-title">{item.name}</h3>
        <img src={item.img}/>
      </section>
      <section className="product-details">
      <h3 className="desktop-title">{item.name}</h3>
        <h4>{item.price}</h4>
        <p>{item.description}</p>
        <div className="product-actions">
          <select className="quantity-selector">
            {quantity.map(num => <option key= {num} value={num}>{num}</option>)}
          </select>
          <button className="addToCartBtn" onClick={cartHandler}>Add to Basket  </button>
      </div>
        {itemAdded}
        {loginAlert}
      </section>
    </section>
    </>
  )
}

export default Product