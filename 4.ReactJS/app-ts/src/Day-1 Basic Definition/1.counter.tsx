import { useState } from "react";

const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((val) => val + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
