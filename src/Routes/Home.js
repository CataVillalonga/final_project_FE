import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from '../Components/Carousels'
import Category from '../Components/Category';
import SubCategory from '../Components/SubCategory';
import Nav from '../Components/Nav'
import '../styles/main.css'
function Home({ data, cart, setCart }) {
  
  return (
    <>
      <Nav data={data} cart={cart} setCart={setCart}/>
      <Carousels/>
      <main className="main-container">
        <p className='main-title'> Shop by category </p>
        <section className='category-container'>
          {data?.map((obj,index) => {
            return <Category key={index}obj={obj}/>
          })}
        </section>
        <p className='main-title'> Shop by item </p>
        <section className='subcategory-container'>
        {data?.map((obj,index) => {
          const {subcategories} = obj
          return <SubCategory key={index} subcategory={subcategories} category={obj.category}/>
        })}
        </section>
      </main>
    </>
  )
}
export default Home