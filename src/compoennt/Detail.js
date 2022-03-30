import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector  } from 'react-redux'
import { useEffect } from 'react'
import {BsDash, BsPlus} from "react-icons/bs";
import { useState } from 'react';
import currencyFormatter from "currency-formatter";


const Detail = () => {
    const [quantity ,Setquantity]= useState(0)
    const {id} =useParams()
    const dispatch =useDispatch()
    const producti =useSelector(state=>state.ProductReducer);
    const product =producti.product
       useEffect(() => {
  dispatch({type:'PRODUCT',id:id})
  console.log(id)
  console.log(producti.product)
    }, [id])
    const dncr=()=>{
    
      if (quantity==0) {
        Setquantity(0)
        
      }else{
        Setquantity(quantity-1)
      }
    }
    
  

  return (
    <div>
<div className='main-b'>
    <div className='img-box'>
        <img src={`/images/${product.img}`} />
    </div>
    <div className='detail'>
        <h1>{product.name}</h1>
        <div className='price'>
            <span className='rprice' >{currencyFormatter.format(product.price, { code: 'USD' })}</span>
            <span className='discountprice'>{currencyFormatter.format(product.discountprice, { code: 'USD' })}</span>
        </div>
        <div className='box'>
        <div className='inrder'>
            <button className='Dncr' onClick={dncr}><BsDash /></button>
            <span className="quantity">{quantity}</span>
            <button className='Incr' onClick={()=>Setquantity(quantity+1)}><BsPlus /></button>

        </div>
      <div className='button'>
          <button className='cartbtn' onClick={()=> dispatch({type:'ADD_TO_CART', payload:{product, quantity}})}> ADD TO CART</button>
      </div>

        </div>
  <div className='dinfo'>
      <h1>Detail</h1>
   <p>{product.desc}</p>
       </div>
    </div>
</div>



    </div>
  )
}

export default Detail