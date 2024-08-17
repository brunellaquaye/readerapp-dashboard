import React, { useState } from 'react';
import Plus from "../../../assets/PlusOutline.png"; // Ensure this icon is present
import "../styles/questionBox.css";

function QuestionBox({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='question-box-wrapper'>
      <div className='question-header' onClick={toggleAnswer}>
        <p>{question}</p>
        <img
          src={Plus} 
          alt="plus-shape"
          className={`toggle-icon ${isOpen ? 'open' : ''}`}
        />
      </div>
      
      <div className={`answer-container ${isOpen ? 'open' : ''}`}>
        <p className='answer'>{answer}</p>
      </div>
    </div>
  );
}

export default QuestionBox;
