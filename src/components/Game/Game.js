import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input  from '../Input';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.log( {answer} );


function Game() {
  const [input, setInput] = React.useState('');
  const [prevInputs, setPrevInputs] = React.useState([]);

  const gameOver = prevInputs.includes(answer) || prevInputs.length== NUM_OF_GUESSES_ALLOWED 

  return(
  <>
    <GuessResults
      prevInputs = {prevInputs}
      answer = {answer}
    />

    {prevInputs.includes(answer) 
    && <Banner 
    answer = {answer} 
    numOfGuesses = {prevInputs.length} 
    status = {"win"}/>}

    {prevInputs.length== NUM_OF_GUESSES_ALLOWED 
    && <Banner 
    answer = {answer} 
    numOfGuesses = {prevInputs.length} 
    status = {"loose"}/>}

    <Input 
      input= {input}
      setInput = {setInput}
      prevInputs = {prevInputs}
      setPrevInputs={setPrevInputs}
      gameOver= {gameOver}
    />

  </>

  ) 
}

export default Game;
