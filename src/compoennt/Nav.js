import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Nav = () => {
  const {totalquantity} =useSelector(state=> state.CartReducers)
  return (
    <div className='nav'>

      <div className='container'>
      <div className='nav_container'>
  <div className='nav_left'>
    <Link to='/'>
    <img src="/images/logo.webp"alt=''/>

    </Link>

    </div>
  <div className='nav_right'>
    
    <Link to='/cart'><div className='basket'>
      <BsFillBagFill  className='cart-icon'/>
    <span>{totalquantity} </span>
      </div></Link></div>
  

  </div>
        </div>


    </div>
  )
}

export default Nav