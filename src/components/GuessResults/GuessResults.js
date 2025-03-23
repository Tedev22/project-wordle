import React from 'react';
import Guess from '../Guess/Guess';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';

function GuessResults({prevInputs, answer}) {

  console.log( prevInputs );
  return (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
      return(
        <>
          <Guess
          value = {prevInputs[num]} 
          key= {num}
          answer = {answer}
          />
        </>
      )
    })}
  </div>
  );
}

export default GuessResults;
