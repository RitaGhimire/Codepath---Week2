import { useState } from 'react'
import { flashcardQuestions } from './info'

const LeftRightBtn = () => {
  const [flashcard, setFlashcard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const quesAns = flashcardQuestions[flashcard];

  function handlePreviousClick() {
    setFlashcard(prev => (prev === 0 ? flashcardQuestions.length - 1 : prev - 1));
    setShowAnswer(false);
  }

  function handleNextClick() {
    setFlashcard(next => (next === flashcardQuestions.length - 1 ? 0 : next + 1));
    setShowAnswer(false);
  }

  function toggle() {
    setShowAnswer(prev => !prev);
  }

  return (
    <div>
      <div className='desc'>
        <p>Number of cards: {flashcardQuestions.length - 1}</p>
      </div>

      <div className='box'>
        <div className={`flip ${showAnswer ? 'flipped' : ''}`} onClick={toggle}>
          <div className='a'>{quesAns.question}</div>

          <div className='b'>
  {typeof quesAns.answer === 'function' ? (
    quesAns.answer()
  ) : typeof quesAns.answer === 'object' && quesAns.answer?.src ? (
    <img src={quesAns.answer.src} alt="answer visual" style={{ maxWidth: '100%', height: 'auto' }} />
  ) : (
    quesAns.answer
  )}
</div>
</div>    
      </div>

      <div className="bottom">
        <button className="nav-btn" onClick={handlePreviousClick}>←</button>
        <button className="nav-btn" onClick={handleNextClick}>→</button>
      </div>
    </div>
  );
};

export default LeftRightBtn;
