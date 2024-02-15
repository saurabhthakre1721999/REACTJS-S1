import { useReducer } from "react";
import { calcualtorReducer } from "./2.calculator.reducer";

const initialState = {
  num1: "10",
  num2: "20",
  result: 0,
};

const CalcualtorUseReducer = () => {
  const [state, dispatch] = useReducer(calcualtorReducer, initialState);

  console.log("State: ", state);

  const onCalcuatorAction = (type, value) => {
    dispatch({ type, value }); // "add", value:undefined
  };

  return (
    <div>
      <h1>Result with UR: {state.result}</h1>
      <input
        type="text"
        placeholder="Enter first number"
        value={state.num1}
        onChange={(e) => onCalcuatorAction("num1", e.target.value)}
      />
      <input
        type="text"
        value={state.num2}
        placeholder="Enter second number"
        onChange={(e) => onCalcuatorAction("num2", e.target.value)}
      />

      <div>
        <button onClick={() => onCalcuatorAction("add")}>Add</button>
        <button onClick={() => onCalcuatorAction("multiply")}>Multiply</button>
        <button onClick={() => onCalcuatorAction("divide")}>Divide</button>
        <button onClick={() => onCalcuatorAction("subtract")}>Subtract</button>
      </div>
    </div>
  );
};

export default CalcualtorUseReducer;
