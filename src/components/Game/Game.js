import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput/UserInput';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answersList, setAnswersList] = React.useState([])

  return (
  <>
    <Guess answersList={answersList} answer={answer}/>
    <GuessResults answersList={answersList}/>
    <UserInput answersList={answersList} setAnswersList={setAnswersList}/>
  </>
)}

export default Game;
