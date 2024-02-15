import { useRef } from "react";
import RefChild from "./Child";

const RefParent = () => {
  const inputRef = useRef(null);

  const onFocusChildInput = () => {
    if (!inputRef.current) return;
    //inputRef.current.focus();
    //inputRef.current.value = "Sumit";

    inputRef.current.innerText = "Vishal";
  };

  console.log("Parent Re-Render");
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={onFocusChildInput}>Add Focus</button>
      <RefChild ref={inputRef} />
    </div>
  );
};

export default RefParent;
