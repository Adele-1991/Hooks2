import React,{useState,useMemo} from 'react';

const Comp9UseMemo = () => {
    const[number,setNumber]=useState(0);
    const[flag,setFlag]=useState(false);
    const delay=useMemo(()=>{
        for (let i = 0; i < 500000; i++) {};
           return "Adele";
            
        }, [number]);
    
  return (
    <div>
        <h1>Name:{delay}</h1>
        <h2>Number:{number}</h2>
        <button onClick={()=>setNumber(prevNumber=>prevNumber+1)}>up</button>
      <h2>Flag:{flag?"True":"False"}</h2>
      <button onClick={()=>setFlag(!flag)}>Change Flag</button>
    </div>
  )
};

export default Comp9UseMemo;
