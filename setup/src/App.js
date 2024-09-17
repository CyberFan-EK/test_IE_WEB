import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);
  const str1 = "Hello";
  return (
    <>
      <h1>Я натиснув {count} разів на кнопку</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        ok
      </button>
    </>
  );
}

export default App;
