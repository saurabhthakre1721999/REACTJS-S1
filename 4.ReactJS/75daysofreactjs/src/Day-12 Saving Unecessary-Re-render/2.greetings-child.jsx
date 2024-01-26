import { memo } from "react";
const GreetingsChild = () => {
  console.log("GreetingsChild Re-Rendering");
  return (
    <div>
      <p>Welcome to 75 Days of ReactJS Anika</p>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(GreetingsChild);
