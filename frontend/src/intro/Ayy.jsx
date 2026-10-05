import { useState } from "react";
  

function Ayy() {
  const [color, setColor] = useState("#ffffff");

  function changeColor() {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  }

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Ayy;