import { use, useEffect, useState } from 'react'
import { flashcardQuestions } from './info'

const Guess = ({answer, question, streak, setStreak}) => {

const [input, setInput] = useState('');
const [result, setResult] = useState('');

const checkAns = () =>{
const userInput = input.trim().toLowerCase();
const correctAns = typeof answer === 'string' ? answer.trim().toLowerCase(): '';

if(userInput === correctAns){
setResult('correct');
setStreak(prev => prev + 1);
}

else{
setResult('incorrect');
if(setStreak(prev => prev != 0)){
setStreak(prev => prev  - 1)
}else{
    setStreak(0)
}
}
};


const handleSubmit = (e) => {
    e.preventDefault();
    checkAns();
  };

    return(
        <div>
        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="a">Guess the answer here: </label>
              <input className = {
                result === 'correct' ? 'input-correct':
                result === 'incorrect' ? 'input-incorrect' : ''
              }
              type = "text" id = "a" name = "a" placeholder='Place your answer here' value = {input} onChange={(e) => setInput(e.target.value)} /> 
              <button type='submit'> Submit Guess</button>
              </div>
              </form>
        </div>

        </div>
    )
};
export default Guess; 
