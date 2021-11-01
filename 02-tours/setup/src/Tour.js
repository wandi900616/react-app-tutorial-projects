import React, { useState } from "react";

const Tour = (props) => {
  // function Tour(prop){}
  const { id, image, info, price, name, removeTour } = props;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          {/* tour-info and tour price is inside tour */}
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            // the style for this button is actually .single-tour button
            onClick={() => {
              setReadMore(!readMore);
            }}>
            {readMore ? `show less` : `read more`}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
