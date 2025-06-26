import React from 'react';

function UserInput() {
  const [answer, setAnswer] = React.useState('')
  const [answersList, setAnswersList] = React.useState([])

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      if (answer.length !== 5){
        alert(`"Your guess has to be 6 letters!" ${answer.length}`)
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

       <h1>Answer's List</h1>
       <ul>
          {answersList.map(ans => <li key={Math.random()}>{ans}</li>)}
       </ul>
    </form>
  )
}

export default UserInput;
