import { useState } from "react";

function Arr() {
  const [display, setDisplay] = useState("");

  function handleClick(value) {
    setDisplay(display + value);
  }

  function calculate() {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  }

  function clear() {
    setDisplay("");
  }

  return (
    <div>
      <h1>Calculator</h1>

      <input type="text" value={display} readOnly />

      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>÷</button>
      </div>

      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>×</button>
      </div>

      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>−</button>
      </div>

      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>

      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Arr;