import { useState , useEffect } from 'react'
import { flashcardQuestions } from './info'
import Guess from './Guess'

const LeftRightBtn = () => {
  const [flashcard, setFlashcard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [streak, setStreak] = useState(0);

  const [longestStreak, setLongestStreak] = useState(() => {
    const saved = localStorage.getItem('longestStreak');
    return saved ? parseInt(saved) : 0;
    });

  const quesAns = flashcardQuestions[flashcard];

  useEffect(() => {
    if(streak > longestStreak){
        setLongestStreak(streak);
        localStorage.setItem('longestStreak', streak.toString());
    }
    },[streak,longestStreak]);

  function handlePreviousClick() {
    if (flashcard > 0) {
      setFlashcard(prev => prev - 1);
      setShowAnswer(false);
    }
  }

  function shuffle(){
    const ranIndex = Math.floor(Math.random() * flashcardQuestions.length);
    setFlashcard(ranIndex);
    setShowAnswer(false);
    }
    
  function handleNextClick() {
  if (flashcard < flashcardQuestions.length - 1) {
      setFlashcard(prev => prev + 1);
      setShowAnswer(false);
    }
  }

  function toggle() {
    setShowAnswer(prev => !prev);
  }

  return (
    <div>
      <div className='desc'>
        <p>Number of cards: {flashcardQuestions.length - 1}</p>
        <p> Current Streak: {streak}     Longest Streak: {longestStreak} </p>
        
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
      <Guess
      answer = {quesAns.answer}
      question = {quesAns.question}
      streak = {streak}
      setStreak = {setStreak}
      />
      <div className="bottom">
        <button className= {`nav-btn ${flashcard === 0 ? 'disabled' : ''}`} onClick={handlePreviousClick}  disabled={flashcard === 0}>←</button>
        <button  className={`nav-btn ${flashcard === flashcardQuestions.length - 1 ? 'disabled' : ''}`} onClick={handleNextClick} disabled={flashcard === flashcardQuestions.length - 1}>→</button>
        <button onClick={shuffle}>Shuffle Card</button>

      </div>
    </div>
  );
};

export default LeftRightBtn;
