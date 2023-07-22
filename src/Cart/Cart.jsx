
import React from 'react'
import './Cart.css'
import {useDispatch, useSelector} from 'react-redux'
import {delCart} from '../redux/action/index'
import { useState } from 'react'

export const Cart = () => {
  const state = useSelector((state)=>state.handleCart)
     const dispatch = useDispatch()


     const [count, setCount] = useState(1);
    const increase = () => {
        if(count<5){
        setCount((prevCount) => prevCount + 1)
    }else{
        setCount((prevCount) => 0 );
    }
      }
      const decrease = () => {
        if(count>0){
        setCount((prevCount) => prevCount - 1)
    } else {
        setCount((prevCount) => 0)
    }
      }


const handleClose = (item) =>{
  dispatch(delCart(item))
}
var total = 0;
     const cartItems = (cartItem)=>{
      total = total +  cartItem.price*count;
      return(
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button onClick={()=>handleClose(cartItem)}
             className="btn-close float-end" aria-label='close'></button>
<div className="row justify-content-center">
  <div className="col-md-4">
    <img src={cartItem.image} alt=""  height='200px' width='180px'/>

  </div>
  <div className="col-md-4">
    <h3>{cartItem.title}</h3>
    
    <p className='lead fw-bold'>${cartItem.price*count}</p>
    <div className="inc-dec" key={cartItem.id}>
    <button
                className="decrease-btn"
                onClick={()=>decrease(cartItem.id)}
            >-</button>
                        <p>{count}</p><button
                className="increase-btn"
                onClick={()=>increase(cartItem.id)}
            >+</button>
            </div>
  </div>
</div>

          </div>
        </div>
      )
     }
     const emptyCart=() =>{
      return(
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      )
     }
     const button=()=>{
      return(
      <div className="container">
        <h1>Total price</h1>
        <h1>$ {total}</h1>
        <div className="row">
          <button style={{marginBottom:'30px',width:"250px",textAlign:'center',height:'30px',backgroundColor:'red'}}>Proceed to Checkout</button>
        </div>
      </div>
      )

     }
  return (
    <div>
      {state.length===0&& emptyCart()}
       {state.length!==0 && state.map(cartItems)}
       {state.length!==0 && button()}
    </div>
  )
}