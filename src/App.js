import "./styles.css";
import ReactForm from "./Components/ReactForm";
import ReactAPICall from "./Components/ReactAPICall";
import TextSwap from "./Components/TextSwap";
import UseReducerHook from "./ReactHooks/UseReducerHook";
import UseContextRoot from "./ReactHooks/ReactContext/UseContextRoot";

export default function App() {
  return (
    <div className="App">
      {/* <ReactForm /> */}
      {/* <ReactAPICall /> */}
      {/* <TextSwap /> */}
      {/* <UseReducerHook /> */}
      <UseContextRoot />
    </div>
  );
}
