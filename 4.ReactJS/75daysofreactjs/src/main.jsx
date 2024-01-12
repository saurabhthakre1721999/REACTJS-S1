import ReactDOM from "react-dom/client";
//import Greetings from "./Day-3 Class Component/1.hello.jsx";
//import InputBox from "./Day-3 Class Component/2.input-box.jsx";
//import Counter from "./Day-3 Class Component/3.counter.jsx";
//import ToggleBtn from "./Day-3 Class Component/4.toggle-btn.jsx";
//import DynamicForm from "./Day-3 Class Component/5.DyamicForm.jsx";
//import ValidationExample from "./Day-3 Class Component/6.validation-example.jsx";
//import HobbiesFiller from "./Day-4 Assignments/1.Hobbies-Fillter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Mounting from "./Day-5 - Lifecycle/1.Mounting.jsx";
//import Updating from "./Day-5 - Lifecycle/2.Updating.jsx";
import ParentComponent from "./Day-5 - Lifecycle/4.ParentCounter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ParentComponent />
    <ToastContainer />
  </>
);
