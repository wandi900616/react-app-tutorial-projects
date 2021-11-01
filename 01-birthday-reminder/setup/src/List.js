import React from "react";

const List = ({ people, removeFunction }) => {
  return (
    <>
      {people.map((person) => {
        return <Details {...person} Myfunction={removeFunction} />;
      })}
    </>
  );
};

const Details = (props) => {
  const { id, name, age, image, Myfunction } = props;

  return (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}hello</h4>
        <p onClick={() => Myfunction(id)}>{age}</p>
      </div>
      <button onClick={() => Myfunction(id)}>remove</button>
    </article>
  );
};

export default List;
