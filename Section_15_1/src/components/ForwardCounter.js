// import { useState, useEffect } from 'react';
import Card from './Card';
import Counter from './useCounter';


const forwardCounter = (value) => (
  value+1
);

const ForwardCounter = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  // const counter = Counter(forwardCounter);
  const counter = Counter(true);


  return <Card>{counter}</Card>;
};

export default ForwardCounter;
