import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Counter(){
    
 const [count, setCount] = useState(0);
 const handleIncrement = () => (
  setCount(count +1)
 )
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
  }
};
 
  return(
<div className='d-flex justify-content-center align-items-center bg-secondary ' style={{height: "100vh"}}> 
  <div >
    <h1 className="text-center" style={{fontSize:'50px', color:'white'}}>{count}</h1>
    <div className='d-flex'>
      <button onClick={handleIncrement} className='btn btn-dark me-1 border border-light text-light' style={{ borderRadius:7,}}>Increment</button>
      <button onClick={handleDecrement} className='btn btn-dark ms-1 border border-light text-light' style={{ borderRadius:7}}>Decrement</button>
    </div>
  </div>
</div>
  )
}
