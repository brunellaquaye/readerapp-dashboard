import React from 'react'
import "../styles/customInputElement.css"

function CustomInputElement({placeholder}) {
  return (
    <div className='custom-input-wrapper'> 
        <input  type="text" placeholder={placeholder}/>
    </div>
  )
}

export default CustomInputElement