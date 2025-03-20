import React from 'react';

function Input({input, setInput, prevInputs, setPrevInputs}) {
  return (
  <div>
   <form className="guess-input-wrapper"
    onSubmit={ event => {
      event.preventDefault();
      console.log({input});
      const newInput = {
        input,
        id: Math.random()
      }
      setPrevInputs([...prevInputs, newInput]);
      setInput('');
    }}>
      <label htmlFor="guess-input">Enter guess: (5 Letters)</label>
      <input id="guess-input" type="text"
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
