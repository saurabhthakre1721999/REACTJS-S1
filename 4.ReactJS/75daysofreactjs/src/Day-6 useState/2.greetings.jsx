import { useState } from "react";

function Greetings() {
  const [uName, setUName] = useState(localStorage.getItem("vishal") || "");

  return (
    <>
      <input
        placeholder="Enter name"
        type="text"
        value={uName}
        onChange={(e) => setUName(e.target.value)}
      />
      {uName && (
        <p>
          Welcome <strong>{uName}</strong> to the team
        </p>
      )}
    </>
  );
}

export default Greetings;
