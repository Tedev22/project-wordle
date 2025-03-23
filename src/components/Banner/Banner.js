import React from 'react';

function Banner({numOfGuesses, status, answer}) {
  return (
    status == "win" 
    ? <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
    : status == "loose"
    ? <div class="sad banner">
       <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    : <div></div>
  );
}

export default Banner;
