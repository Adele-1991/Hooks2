import React from 'react'
import { useTest } from './Hooks/test'
const Com12CustomHook = () => {
  return (
    <div>
      Number:{useTest(20)}
    </div>
  )
}

export default Com12CustomHook
