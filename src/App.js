import {Router, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Nav from './compoennt/Nav'
import Home from './compoennt/Home'
import Cart from './compoennt/Cart'
import Detail from './compoennt/Detail'

export const App = () => {
  return (
 
    <>


    <Nav/>                             


<Route path='/' exact component={Home} />
<Route path='/cart' exact  component={Cart}/>
<Route path='/detail/:id' exact  component={Detail}/>

    

    </>
   



  )
}

