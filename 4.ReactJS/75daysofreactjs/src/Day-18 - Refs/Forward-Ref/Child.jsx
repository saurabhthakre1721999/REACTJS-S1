import { forwardRef } from "react";

const RefChild = forwardRef((props, ref) => {
  console.log("Child Re-Render", props, ref);

  return (
    <div style={{ backgroundColor: "turquoise", padding: 12 }}>
      <h1>Child Data</h1>
      <input type="text" ref={ref} placeholder="Enter something" />
    </div>
  );
});

RefChild.displayName = "RefChild";

export default RefChild;
