import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    var amount = parseInt(count);
    if (count > data.length) {
      amount = data.length;
    }

    if (count <= 0) {
      amount = 1;
    }
    console.log(amount);
    setParagraphs(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of lorem</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          // onChange event will set target value as count
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
