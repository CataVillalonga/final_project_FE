import Nav from "../Components/Nav"
// import { cartFunc } from '../Modules/Cart' 
import "../styles/Checkout.css"

// const { deleteAllCart } = cartFunc;

function Checkout({cart}) {

  return (
    <>
    <Nav cart={cart}/>
    <section className="checkout-container">
      <form>
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
          {/* <button onClick={deleteAllCart}>Confirm Purchase</button> */}
          <button>Confirm Purchase</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Checkout