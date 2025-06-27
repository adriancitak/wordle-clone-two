import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

const rows = range(NUM_OF_GUESSES_ALLOWED)
const columns = range(5)

function Guess({answersList, answer}) {
  return <div className='guess-results'>
      {rows.map((_, rowIndex) => (
        <p key={Math.random()} className='guess'>
            {columns.map((_ ,colIndex) => {
              const letter = answersList[rowIndex]?.[colIndex] || '';
              return <span key={colIndex} className='cell'>{letter}</span>
              
            })}
        </p>
      ))}
  </div>;
}

export default Guess;
