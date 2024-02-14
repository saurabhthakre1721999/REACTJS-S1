import { useMemo, useState } from "react";

const TREE_DATA = [
  {
    name: "Fruit",
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }],
  },
  {
    name: "Green",
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }],
  },
  {
    name: "Vegetables",
    children: [
      {
        name: "Green",
        children: [{ name: "Broccoli" }, { name: "Brussels sprouts" }],
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins" }, { name: "Carrots" }],
      },
    ],
  },
];
const NestedData = () => {
  const [dataSet, setDataSet] = useState(TREE_DATA);

  const greenProducts = useMemo(() => {
    const results = [];

    for (let i = 0; i < dataSet.length; i++) {
      const { name, children } = dataSet[i];
      if (name === "Green") {
        results.push(children);

        // Check Green inside children
      }
    }

    return results;
  }, [dataSet]);

  console.log(greenProducts);

  return <h1>Green Products</h1>;
};

export default NestedData;
