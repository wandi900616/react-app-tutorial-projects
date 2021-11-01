import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  //get tours properties as define in Tours element as in App.js
  const { tours, removeTour } = props; //another alternative
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
