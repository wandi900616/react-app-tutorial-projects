import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, SetQuestions] = useState(data);
  // console.log(questions[0].id);
  return (
    <main>
      <div className="container">
        <div>
          <h3>questions and answers about login</h3>
          <p>
            the background purple is the main area (style = min-height: 100vh;
            <strong>
              display: flex; justify-content: center; align-items: center
            </strong>
            )
          </p>
          <p> main [div.container]</p>
          <p>
            div.container (style= width: 90vw; margin: 5rem auto;padding: 2.5rem
            2rem;
            <strong>display: grid; gap: 1rem 2rem</strong>)
          </p>
          <p>
            div.container[div( contain h3 with text content questions and answes
            about login),section.info]
          </p>
        </div>
        <section className="info">
          <p>inside section.info</p>
          <p>
            no specific style is set for section.info. just a block container.
            the style is set by its own element
          </p>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
