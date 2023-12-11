import React from 'react'

const A = (props) => {
    console.log("Component A...")
  return (
    <div>
      NumberA: {props.numberA}
      <br/>
      <button onClick={props.changeHandler}>Up</button>
    </div>
  )
}

export default React.memo(A)
