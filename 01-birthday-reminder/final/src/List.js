import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <Details {...person} />;
      })}
    </>
  );
};

const Details = (props) => {
  const { id, image, name, age } = props;
  return (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h4>name is {name}</h4>
        <p>{age} years old</p>
      </div>
    </article>
  );
};

export default List;
