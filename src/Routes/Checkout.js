import Nav from "../Components/Nav";
import { useState } from "react";
import { cartFunc } from '../Modules/Cart';
import { useNavigate } from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react"; // code added
import "../styles/Checkout.css"

const { deleteAllCart } = cartFunc;

function Checkout({data, cart, setCart}) {

  const [purchaseComplete, setpurchaseComplete] = useState(false);

  const { user } = useAuth0();
  const navigate = useNavigate();

  const purchaseHandler = async (event) => {
    event.preventDefault();
    const name = user.name.replace(' ','-');
    await deleteAllCart(name);
    setpurchaseComplete(true);
    setTimeout(()=> {
      setpurchaseComplete(true);
      navigate('/');
    }, 3000)
  }

  return (
    <>
    <Nav data={data} cart={cart} setCart={setCart}/>
    <section className="checkout-container">
      {purchaseComplete ? <article><h3>Thank you for your purchase!</h3></article> :
    <form autoComplete="off" onSubmit={event => purchaseHandler(event)}>
        <label className="checkout-label" for="name">Enter name and delivery address</label>
        <input className="checkout-input" type="text" name="name" placeholder="First Name" required></input>
        <input className="checkout-input" type="text" placeholder="Last Name" required></input>
        <input className="checkout-input" type="text" placeholder="Address" required></input>
        <div className="split-container">
          <input className="checkout-input" type="text" placeholder="City" required></input>
          <input className="checkout-input" type="text" placeholder="Post Code" required></input>
        </div>
        <div className="split-container">
          <input className="checkout-input" type="text" placeholder="Email Address" required></input>
          <input className="checkout-input" type="text" placeholder="Mobile No" required></input>
        </div>
        <div className="purchase-btn-container">
          <button type="submit">Confirm Purchase</button>
        </div>
      </form>}
    </section>
    </>
  )
}

export default Checkout