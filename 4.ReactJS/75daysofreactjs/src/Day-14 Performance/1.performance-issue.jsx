import { useEffect, useState } from "react";

const PerformanceIssue = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [no, setNum] = useState(0);

  useEffect(() => {
    let sum = counter2;
    for (let i = 0; i < 10; i++) {
      sum += i;
    }

    setNum(sum);
  }, [counter2]);

  console.log("Re-Render: ", counter);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increment {counter} - {no}
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increment2 {counter2} - {no}
      </button>
    </div>
  );
};

export default PerformanceIssue;
