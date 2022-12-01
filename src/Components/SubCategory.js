import { useNavigate } from "react-router-dom";
import '../styles/subcategory.css'
function SubCategory({ subcategory, category }) {
  const navigate = useNavigate();

  const subCategoryHandler = (e) => {
    // navigate(`/${category}/${e.target.alt}`);
    if(e.target.alt === undefined){
      console.log(e.target.innerHTML)
      return navigate(`/${category}/${e.target.innerHTML}`);
    }
    console.log(e.target.alt)
    return navigate(`/${category}/${e.target.alt}`);
  }
  return (
    <>
      {subcategory?.map(category => {
        return (
          <section alt={category.name}className='subcategory'onClick={subCategoryHandler}>
          <img alt={category.name} src={category.img}/>
          <p value={category.name}>{category.name.replace('-',' ')}</p>
          </section>
        )

      })}
    </>
  )
}

export default SubCategory