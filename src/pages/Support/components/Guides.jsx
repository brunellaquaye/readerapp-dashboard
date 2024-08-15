import React from 'react'
import "../styles/guides.css"

function Guides({title,children}) {
  return (
    <div className='guides-wrapper'>
        <em>{title}</em>
        <p>
         {children}
        </p>
    </div>
  )
}

export default Guides