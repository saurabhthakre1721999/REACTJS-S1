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
//import ParentComponent from "./Day-5 - Lifecycle/4.ParentCounter.jsx";
import CounterFC from "./Day-6 useState/1.counter.jsx";
import Greetings from "./Day-6 useState/2.greetings.jsx";
import ToggleUI from "./Day-6 useState/3.toggleUi.jsx";
import ProfileObj from "./Day-6 useState/4.profile-obj.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CounterFC />
    <hr />
    <Greetings />
    <hr />
    <ToggleUI />
    <hr />
    <ProfileObj />
    <ToastContainer />
  </>
);
