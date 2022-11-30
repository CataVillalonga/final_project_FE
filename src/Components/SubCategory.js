import { useNavigate } from "react-router-dom";
import '../styles/subcategory.css'
function SubCategory({ subcategory, category }) {
  const navigate = useNavigate();

  const subCategoryHandler = (e) => {
    navigate(`/${category}/${e.target.alt}`);
    console.log(e.target.alt)
  }
  
  return (
    <>
      {subcategory?.map(category => {
        return (
          <section className='subcategory'>
          <img alt={category.name} src={category.img} onClick={subCategoryHandler}/>
          <p>{category.name.replace('-',' ')}</p>
          </section>
        )

      })}
    </>
  )
}

export default SubCategory