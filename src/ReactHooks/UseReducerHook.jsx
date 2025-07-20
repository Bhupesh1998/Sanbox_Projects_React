import React, { useReducer, useState } from "react";

const initialVal = [];

const reducerFun = (state, action) => {
  if (action.type === "ADD_TASK") {
    return [
      ...state,
      {
        id: state.length + 1,
        name: action.payload,
      },
    ];
  }
  if (action.type === "Delete") {
    return state.filter((item) => item.id !== action.payload);
  }
  if (action.type === "Clear") {
    return initialVal;
  } else {
    return state;
  }
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducerFun, initialVal);
  const [input, setInput] = useState("");

  const handleAddOperation = () => {
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "Delete", payload: id });
  };

  const ClearLogic = () => {
    dispatch({ type: "Clear" });
  };
  return (
    <>
      <div>useReducers</div>
      <input
        type="text"
        value={input}
        placeholder="Input Name"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddOperation}>Add</button>
      {state?.map((items) => (
        <>
          <li key={items.key}>
            {items.name}
            <button onClick={() => handleDelete(items.id)}>Delete</button>
          </li>
        </>
      ))}
      <button onClick={ClearLogic}>Clear</button>
    </>
  );
}

export default UseReducerHook;
