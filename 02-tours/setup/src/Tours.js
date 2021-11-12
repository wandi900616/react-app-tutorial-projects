import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  //get tours properties as define in Tours element as in App.js
  const { tours, removeTour } = props; //another alternative
  return (
    <section className="tours-section">
    <h5>In section</h5>
    <h5>This section contains div.title, and div where iteration of Tour.js happen</h5>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <h5>inside a div.title</h5>
      </div>
      <div className="tour-iteration">
      <h5>All boxes below is contain in a div</h5>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
