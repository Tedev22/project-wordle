import React from 'react';
import{range} from '../../utils'
import { checkGuess } from '../../game-helpers';



function Guess({value, answer}) {

  checkedWord = checkGuess(value, answer)  
 
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
        <span key= {num} className={`cell ${checkedWord ? checkedWord[num].status : "" }`}>
          {value ? checkedWord[num].letter : undefined}
          </span>
        )})
      }
    </p>
    )
    ;
  
 
}

export default Guess;
