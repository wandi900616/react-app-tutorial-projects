import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  //data is array containing objects
  //object contain id, name, age, image
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
        {/* people.length and onClick on button is at level of app */}
        {/* people as in state is drill into <List/> */}
      </section>
    </main>
  );
}

export default App;
