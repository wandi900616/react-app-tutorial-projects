import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(color); //console.log color from state
    try {
      console.log("handlesubmit");
      let colors = new Values(color).all(10);
      // console.log(colors);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    // new Values(color);
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              // console.log(e.target);
              // console.log(e.target.value);
              setColor(e.target.value);
            }}
            // need to access value for setColor from event object
            placeholder="#f15025"
            className={error ? "error" : null}
            // {`${error ? "error" : null}`}
          />

          <button type="submit" className="btn">
            generate again
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          // console.log(color.hex);
          const colorWithHex = { ...color, hex: color.hex };
          // cannot be define in singleColor
          //destructue color and add new hex props

          return <SingleColor {...colorWithHex} key={index} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
