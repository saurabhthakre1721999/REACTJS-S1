import { useState } from "react";
import GreetingsChild from "./2.greetings-child";

const CounterParentV2 = () => {
  const [counter, setCounter] = useState(0);

  console.log("Re-Render: ", counter);

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Update Counter
      </button>
      <h1>Counter: {counter}</h1>

      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild counter={counter} />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
      <GreetingsChild />
    </div>
  );
};

export default CounterParentV2;
