import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input  from '../Input';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [input, setInput] = React.useState('');
  const [prevInputs, setPrevInputs] = React.useState([]);
  

  return(
  <>
    <GuessResults
      prevInputs = {prevInputs}
    />
    <Input 
      input= {input}
      setInput = {setInput}
      prevInputs = {prevInputs}
      setPrevInputs={setPrevInputs}
    />

  </>

  ) 
}

export default Game;
