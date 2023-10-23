import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartSlice'


function Cart() {
  const cartArray=useSelector(state=>state.cartReducer)
  const [total,setTotal]=useState()
 const dispatch=useDispatch()
 const getCartTotal=() =>{
  if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }else{
    setTotal(0)
  }
 }
 useEffect(()=>{
  getCartTotal()

 },[cartArray])
  return (
    <div style={{marginTop:'100px'}}>
      
    {
      cartArray.length>0?
      <div className='row mt-5'>
        <div className="col-lg-7">
          <table className="table shadow border">
          <thead>
              <tr>
                <th>Index no.</th>
                <th>Items</th>
                <th>Products</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {
                cartArray.map((product,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
                    <td>{product.price}</td>
                    <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="border p-3 rounded shadow">
            <h1 className="text-primary">Cart Summary</h1>
            <h4 className="mt-3">Total Products: <span>{cartArray.length}</span></h4>
            <h4>Total: <span className="text-danger fw-bolder fs-2">$ {total}</span></h4>
            <div className="d-grid mt-5">
              <button className="btn btn-success rounded">Check Out</button>
            </div>
          </div>
        </div>
         </div>:<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'250px'} src="https://i.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.webp" alt="" />
            <h3 className='fw-bolder text-primary'>Your Wishlist Is Empty!!!</h3>
          <Link  style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
          </div>
    }
    </div>
  )
}

export default Cart