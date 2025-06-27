import React from 'react';

function UserInput({answersList, setAnswersList}) {
  const [answer, setAnswer] = React.useState('')
  
  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      if (answer.length !== 5){
        alert(`Your guess has to be 5 letters! ${answer.length}`)
      } else {
        setAnswersList(prev => [...prev, answer])

      }



     setAnswer('')
    }}>
      <label htmlFor='guess-input'>
        Enter Guess:
      </label>
      <input id='guess-input'
       type='text' value={answer}
       onChange={event => {
        setAnswer(event.target.value.toUpperCase())
        
       }}
       ></input>

       
    </form>
  )
}

export default UserInput;
