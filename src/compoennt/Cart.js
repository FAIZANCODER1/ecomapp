import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
 const Cart = () => {
     const {products,totalprice,totalquantity}= useSelector(state=> state.CartReducers)
  const dispatch = useDispatch()
  return (
    <div>      

<div className='container-main'>
<h3>Your cart</h3>
{products.length > 0 ? <>
<div className='rows'>
<div className="col-9">
<div className="cart__heading">
  
<div className="rows">
                            <div className="col-2">Picture</div>
                            <div className="col-2">Name</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Inc/Dec</div>
                            <div className="col-2">Total Price</div>
                            <div className="col-2">Remove</div>
                        </div>
                        </div>
                        {products.map(product => (
                        <div className="row verticalAlign" key={product.id}>
                         <div className="col-2">
                             <div className="cart__image">
                                 <img src={`/images/${product.img}`} alt=""/>
                            </div>   
                         </div>
                         <div className="col-2">
                             <div className="cart__name">
                                 {product.name}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__price">
                                 {currencyFormatter.format(product.discountprice, {code: 'USD'})}
                             </div>
                         </div>
                         <div className="col-2">
                         <div className="details__info cart__incDec">
                    <div className="inrder">
                    <span className="Dncr" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
    <span className="quantity">{product.quantity}</span>
    <span className="Incr" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
    </div>
                </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__total text-center">
                                 {currencyFormatter.format(product.discountprice * product.quantity, {code: 'USD'})}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                                 <BsReverseBackspaceReverse />
                             </div>
                         </div>
                        </div>
                    ))}


  
 
  </div>
  <div className="col-3 summary-col">
                        <div className="summary">
                            <div className="summary__heading">
                                Summary
                            </div>
                            <div className="summary__details">
                                <div className="rows mb-10">
                                    <div className="col-6">
                                        Total Items:
                                    </div>
                    <div className="col-6">{totalquantity}</div>
                                </div>
                                <div className="rows mb-10">
                                    <div className="col-6">
                                        Total Price
                                    </div>
                                    <div className="col-6">
                                        {currencyFormatter.format(totalprice, {code: 'USD'})}
                                    </div>
                                </div>
                                <button type="button" className="checkout">Checkout</button>
                            </div>
                        </div>
                    </div>
  
</div>







</>:'your cart is empty'}
</div>
</div>
  )
}

export default Cart