import React from "react";
import { FaQuoteRight } from "react-icons/fa";

export function Article(props) {
  const { image, name, quote, title, personIndex, index, person } = props;

  let position = "nextSlide"; //let say the class Name is nextSlide by default
  if (index === personIndex) {
    position = "activeSlide";
  }
  if (
    index === personIndex - 1 ||
    (personIndex === 0 && index === person.length - 1) //if personIndex(state) is zero, and the current person iteration index is same as lastIndex
  ) {
    position = "lastSlide";
  }

  return (
    <article className={position}>
      <h2>{title}</h2>

      <img src={image} alt={name} className="person-img"></img>
      <h4>{name}</h4>
      <FaQuoteRight />
      <p className="text">{quote}</p>
    </article>
  );
}
