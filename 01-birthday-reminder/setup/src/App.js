import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const ReturnWithoutThis = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} reminder project setup </h3>
        <List people={people} removeFunction={ReturnWithoutThis} />
        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
