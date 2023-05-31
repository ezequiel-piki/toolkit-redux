import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  increment, decrement, incrementByAmount } from './counterSlice'

export function Counter() {
 
  const {counter} = useSelector(state => state.counter)
 
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>
        <span>{counter}</span>
       
     
      
      </div>
    </div>
  )
}