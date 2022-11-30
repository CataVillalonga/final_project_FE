import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav"
import "../styles/productSubcategory.css"

function ProductSubcategory({ itemsObj, category, name, data, cart, setCart }) {
  const [order, setOrder] = useState("lowest");
  
  const {products} = itemsObj
  const navigate = useNavigate();
  
  const subCategoryHandler = (e) => {
    const id = e.target.id
    navigate(`/${category}/${name}/${id}`)
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <Nav cart={cart} setCart={setCart} data={data}/>
      <section className="product-subcategory-container">
        <section className="offers-container">
          <h4>Design & Comfort</h4>
          <img src={itemsObj.img} alt="Subcategory image"/>
        </section>
        <section className="subcategory-filter-container">
          <label>Sort by:</label>
          <select onChange={(e) => setOrder(e.target.value)}>
            <option value="lowest">lowest to highest price</option>
            <option value="highest">highest to lowest price</option>
          </select>
        </section>
        <main className="subcategory-items-container">
          {order === "lowest" ? 
          [...products].sort(function(a, b){
            let x = Number(a.price.slice(0,-2).replace(' ', ''));
            let y = Number(b.price.slice(0,-2).replace(' ', ''));
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          }).map( product => {
            return (
              <section className="subcategory-items">
                <img id={product.id} src={product.img} onClick={subCategoryHandler} alt="Product image"/>
                <div className="subcategory-items-detail-container">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                </div>
              </section>
            )
          }) :
          [...products].sort(function(a, b){
            let x = Number(a.price.slice(0,-2).replace(' ', ''));
            let y = Number(b.price.slice(0,-2).replace(' ', ''));
            if (x < y) {return 1;}
            if (x > y) {return -1;}
            return 0;
          }).map( (product,i) => {
            return (
              <section key={i} className="subcategory-items">
                <img id={product.id} src={product.img} onClick={subCategoryHandler} alt="Product image"/>
                <div className="subcategory-items-detail-container">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                </div>
              </section>
            )
          })}
        </main>
      </section>
    </>
  )
}

export default ProductSubcategory