import { useState, useEffect } from 'react';

import Card from './Card';
import Counter from "./useCounter";

const backwardCounter = (value) => {
  return value-1;
}

const BackwardCounter = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  // const counter = Counter(backwardCounter);
  const counter = Counter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
