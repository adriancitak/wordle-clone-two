import React from 'react';

function GuessResults({answersList}) {
  return (
  <div className="guess-results">
    {answersList.map((answer, index) => <p className='guess' key={index}>{answer}</p>)}
  </div>)
}

export default GuessResults;
