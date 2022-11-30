import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/category.css'

function Category({ obj }) {

  const navigate = useNavigate();

  const categoryHandler = (e) => {
    navigate(`/${e.target.alt}`);
  }

  return (
    <section className='category'>
      <img src={obj.img} alt={obj.category} onClick={categoryHandler}/>
      <p>{obj.category.replace('-',' ')}</p>
    </section>
  )
}

export default Category