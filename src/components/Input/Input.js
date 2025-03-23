import React from 'react';

function Input({input, setInput, prevInputs, setPrevInputs, gameOver}) {
  return (
  <div>
   <form className="guess-input-wrapper"
    onSubmit={ event => {
      event.preventDefault();
      setPrevInputs([...prevInputs, input]);
      setInput('');
    }}>
      <label htmlFor="guess-input">Enter guess: (5 Letters)</label>
      <input id="guess-input" type="text"
        disabled = {gameOver}
        pattern="\w{5,5}"
        title="must be 5 letter word!"
        value= {input}
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  </div>
  )
}

export default Input;
