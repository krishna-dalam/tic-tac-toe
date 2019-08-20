import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialState = {
  count: 0,
  value: 0
};

function reducer(state, action) {
  switch (action.val) {
    case "increment":
      return {
        count: state.count + 1,
        value: state.value - 1
      };
    case "decrement":
      return {
        count: state.count - 1,
        value: state.value + 1
      };
    default:
      throw new Error();
  }
}

export default function UseReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Button onClick={() => dispatch({ val: "increment" })}>+</Button>
      <Button onClick={() => dispatch({ val: "decrement" })}>-</Button>
      <br />
      <br />
      Count: {state.count}
      <br />
      <br />
      Value: {state.value}
    </>
  );
}
