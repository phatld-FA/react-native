import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter'
const ForwardCounter = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => {
  //       console.log(prevCounter);
  //       return (prevCounter + 1)
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
