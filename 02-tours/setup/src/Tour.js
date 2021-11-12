import React, { useState } from "react";

const Tour = (props) => {
  // function Tour(prop){}
  const { id, image, info, price, name, removeTour } = props;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <h5>inside an article.single-tour</h5>
      <h5>contains img and footer</h5>
      <img src={image} alt={name} />
      <footer>
      <h5>inside a footer</h5>
      <h5>contain div.tour-info, p and button</h5>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          {/* tour-info and tour price is inside tour */}
        </div>
        <h5>div.tour-info contain h4 for name and prices. the style of .tour-info is set to display:flex;justify-content:space-between</h5>

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
