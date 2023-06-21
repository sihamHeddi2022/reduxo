import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state'

export default function App() {
 
  const counter=useSelector((state)=>state.counter)
 
  const dispatch = useDispatch()

  const {increment,decrement}= bindActionCreators(actionCreators,dispatch)

   return (
    <div>
       
       <p>{counter}</p>
       

       <button onClick={()=>increment()}>
        increment
       </button>

       <button onClick={()=>decrement()}>
          decrement
       </button>



    </div>
  )
}
