import { useState, useEffect } from 'react';

// const Counter = (updateCounter) => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter(updateCounter(counter));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [counter]);

//   return counter;
// };

// export default Counter;
const Counter = (forward=true) => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      console.log(forward);
      const interval = setInterval(() => {
        if(forward){
            setCounter((previous) => previous+1);
        }
        else{
            setCounter((previous) => previous-1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    console.log("Clear")
  
    return counter;
  };
  
  export default Counter;