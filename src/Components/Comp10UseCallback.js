import React,{useState,useCallback} from 'react';
import A from "./A";
import B from "./B"

const Comp10UseCallback = () => {
    console.log("ComponentParent...")

    const[numberA,setNumberA]=useState(0);
    const[numberB,setNumberB]=useState(0);
    const changeHandlerA=useCallback(()=>{
        setNumberA(prevNumber=>(prevNumber+1));
    },[numberA]);
    const changeHandlerB= useCallback(()=>{
        setNumberB(prevNumber=>(prevNumber+1));
    },[numberB])
  return (
    <div>
      <A numberA={numberA} changeHandler={changeHandlerA}/>
      <hr/>
      <B numberB={numberB} changeHandler={changeHandlerB}/>
    </div>
  )
}

export default Comp10UseCallback
