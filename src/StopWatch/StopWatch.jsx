import { useEffect, useState } from 'react'

function StopWatch() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if(start) {
      interval = setInterval(() => {
        setCount((count) => count+ 1);
      }, 1000);
    } 
    return () => {
      clearInterval(interval);
    }
  }, [start]);
  
  return (
    <div>
      <h2>Stop Watch</h2>
        <p><h2>{count}</h2></p>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Pause</button>
      <button onClick={() => {setStart(false);setCount(0)}}>Clear</button>
    </div>
  )
}

export default StopWatch
