import React from 'react';

function GuessResults({prevInputs}) {


  return (
  <div className="guess-results">
    {prevInputs.map((word) => {
      return(
        <p 
        className="guess"
        key={word.id}
         >
          {word.input}
        </p>
      )
    })}

  </div>

  );
}

export default GuessResults;
