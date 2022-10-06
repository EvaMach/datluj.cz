import React, { useEffect, useState } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish, onMistake, active }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  const handleKeyUp = (e) => {
    if (e.key === lettersLeft[0]) {
      setMistake(false);
      if (lettersLeft.length > 1) {
        setLettersLeft(lettersLeft.slice(1));
      } else {
        onFinish();
      }
    } else {
      setMistake(true);
      onMistake((mistake) => mistake + 1);
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('keyup', handleKeyUp);
    }
    if (active) {
      return () => document.removeEventListener('keyup', handleKeyUp);
    }
  }, [lettersLeft, active]);

  return (
    <div className={`wordbox ${mistake && 'wordbox--mistake'}`}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
