import React from 'react'

const B = (props) => {
    console.log("Component B...")

  return (
    <div>
      NumberB : {props.numberB}
      <button onClick={props.changeHandler}>Up</button>
    </div>
  )
}

export default React.memo(B)

