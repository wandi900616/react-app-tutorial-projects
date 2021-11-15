import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const { title, info } = props;

  return (
    <article className="question">
      <p>inside of article.question</p>
      <p>
        article.question[style= border-radius: var(--radius); padding: 1rem
        1.5rem;] no specific positioning is set
      </p>
      <p>article.question[header,p(optional)]</p>
      <p>
        header inside .question is interesting because its style=display: flex;
        justify-content: space-between; align-items: center
      </p>
      <header>
        <h4>{title}test</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
