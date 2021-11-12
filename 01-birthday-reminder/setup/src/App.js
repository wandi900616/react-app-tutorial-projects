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
    <h4 style={{width:'15%'}}>this is inside  main. main display:flex,justify-contents:center,align-items:center</h4>
      
      <section className="container">
        <h4>This is inside ".container"</h4>
        <h4>.container is inside main.</h4>
        <h4>.container contains h3,List Component and clear all button</h4>
        <h3>{people.length} birthday{`${people.length>1?`'s`:``}`} today </h3>
     

        <List people={people} removeFunction={ReturnWithoutThis} />
        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
