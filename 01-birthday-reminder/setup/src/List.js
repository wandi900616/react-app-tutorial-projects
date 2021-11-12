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
        <h4>{name}</h4>
        <p onClick={() => Myfunction(id)}>{age}</p>
        <h6>.person has display of grid-template-column:auto 1fr</h6>
        <h6>only two element inside .person which are img and div</h6>
        <h6>div contain h4,p,and button</h6>
        <button onClick={() => Myfunction(id)}>remove</button>
      </div>
    </article>
  );
};

export default List;
