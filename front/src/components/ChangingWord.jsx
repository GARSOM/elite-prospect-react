import { useState, useEffect } from 'react';
import './ChangingWord.css';

const words = [
  'прозрачность',
  'надежность',
  'доступность',
  'эффективность',
  'ответственность',
];


export default function ChangingWord() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 1000); // время исчезновения
    }, 2500); // интервал между словами

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`changing-word ${fade ? 'fade-in' : 'fade-out'}`}>
      {words[index]}
    </span>
  );
}
