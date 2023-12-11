import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Comp13CustomHook = () => {
    const [accounting,setAccounting]=useState(false);
    const changeLable=()=>{
      return  accounting? "Register":"Login";
    }
  return (
    <div>
      {accounting?<Register/>:<Login/>}
      <button onClick={()=>setAccounting(!accounting)}>{changeLable()}</button>
    </div>
  )
}

export default Comp13CustomHook
