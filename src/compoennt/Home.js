import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'

const Home = () => {
  const {products} =useSelector(state=>state.ProductReducer);
console.log(products )
  return (
<>
<Header/>
  <div className='containers'>
<div className='row'>
{products.map((product)=>{
  return(
   
    <div className='product-box' key={product.id}>
    <div className='img'>
<Link to={`detail/${product.id}`}>    <img src={`/images/${product.img}`} alt="image name"/>   </Link>   </div>
    <div className='product_name'><p>{product.name}</p></div>
  <div className='price'>
<span className="discount">
<p className='rprice'>  
 { currencyFormatter.format(product.price , { code: 'USD' })}

</p> 
 <span className='discountp' >{product.discount}%</span>
  </span> 



 <p>
  { currencyFormatter.format(product.discountprice , { code: 'USD' })}

  </p> 
  </div>
    </div>

  )

})}

</div>
    
    </div>
    
    </>
  
   
  )
}

export default Home