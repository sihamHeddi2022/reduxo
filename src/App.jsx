import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './state'


export default function App() {
 
  const counter=useSelector((state)=>state.counter.value)
 
  const dispatch = useDispatch()



   return (
    <div>
       
       <p>{counter}</p>
       

       <button onClick={()=>dispatch(increment())}>
        increment
       </button>

       <button onClick={()=>dispatch(decrement())}>
          decrement
       </button>



    </div>
  )
}
