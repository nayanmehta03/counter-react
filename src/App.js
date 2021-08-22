import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";

const App = () => {
  document.title = "Counter"
  const [state, setState] = useState({});
  return (<>{state.counter ? <Counter minValue={state.min} maxValue={state.max} /> : <Form setValue={setState}/>}</>);
};

export default App;
