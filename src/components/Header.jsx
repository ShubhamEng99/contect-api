import React from 'react'
import { useCommon } from '../context/CommonContext'

const Header = () => {
    const {state,setState}=useCommon()
    console.log(state)
  return (
    <div>
      {state}
      <button onClick={()=>setState(state+1)}>+</button>
    </div>
  )
}

export default Header
