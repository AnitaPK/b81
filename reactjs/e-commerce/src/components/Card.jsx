import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from '../Theme/ThemeProvider'

const Card = ({ product }) => {
  const [p, setP] = useState()
  const {theme} = useContext(ThemeContext)

  //   useEffect(()=>{
  //     setP(product)
  //   },[])
  // console.log(product,"In card")



  return (
    <div className={`card ${theme=='light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>Price : &#8377;<i>{product.price}</i></p>
        <button className="btn btn-primary">Add To Bag</button>
        <Link to={`/product/${product.id}`} className='btn btn-success ms-2'>Explore</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Card