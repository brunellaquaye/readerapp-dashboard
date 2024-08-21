import React from 'react'
import PropTypes from 'prop-types';
import "../styles/customButton.css"
function CustomButton({buttonName, onClick}) {
  return (
    
    <div className='support-button' >
        <button onClick={onClick}>{buttonName}</button>
    </div>
  )
}
CustomButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func, 
  // Optional prop for handling click events
};

CustomButton.defaultProps = {
  onClick: () => {}, // Default no-op function
};

export default CustomButton