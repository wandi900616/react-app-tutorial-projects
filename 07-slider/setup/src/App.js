import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import Title from "./Title";
import { Article } from "./Article";
function App() {
  const [person, setPerson] = useState(data);
  const [personIndex, setPersonIndex] = useState(0);
  useEffect(() => {
    let lastIndex = person.length - 1;
    if (personIndex < 0) {
      setPersonIndex(lastIndex);
    }
    if (personIndex > lastIndex) {
      setPersonIndex(0);
    }
  }, [person, personIndex]);

  //setting up second useEffect

  useEffect(() => {
    var intervalReturn = setInterval(() => {
      setPersonIndex(personIndex + 1);
    }, 3000);
    return () => {
      clearInterval(intervalReturn);
    }; //put function that undo the above
  }, [personIndex]);

  return (
    <section className="section">
      <Title />
      <div className="section-center">
        {person.map((onePerson, index) => (
          <Article
            person={person}
            key={onePerson.id}
            index={index}
            personIndex={personIndex}
            {...onePerson}
          />
        ))}
        <button
          className="next"
          onClick={() => {
            setPersonIndex(personIndex + 1);
          }}>
          <FiChevronRight />
        </button>
        <button
          className="prev"
          onClick={() => {
            setPersonIndex(personIndex - 1);
          }}>
          <FiChevronLeft />
        </button>
      </div>
    </section>
  );
}

export default App;
