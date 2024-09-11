import React from 'react'
import './Todo.css'
import Cancel from './assets/images/icon-cross.svg'
function Todo({todoInfo}) {
  return (
    <div className='todo'>
     <div className="tick-circle"></div>
     <p>{todoInfo}</p>
     <img src={Cancel} alt="Cancel Icon" />
    </div>
  )
}

export default Todo