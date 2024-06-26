import React, { useState } from 'react'

function Counter() {
    const [product,setproduct]= useState(0)
  return (
    <div className='main'>
        <div className='cbtn'>
            <button className='btn btn-outline-primary' onClick={()=>setproduct(product+1)}>+ Cart</button>
            <button className='btn btn-outline-warning' onClick={()=>setproduct(product-1)}>- Cart</button>
        </div>
    </div>
  )
}

export default Counter
