import React from "react";
import Review from "./Review";
import { FaGithubSquare } from "react-icons/fa";
function App() {
  return (
    <main>
      <h5>inside of main</h5>
      <h5>main contain only one section that is container</h5>
      <section className="container">
        <h5>inside container</h5>
        <h5>container contain div.title and Review component</h5>

        <div className="title">
          <h2>reviews</h2>
          <div className="underline"></div>
          <h5>div.title. Contains h2(reviews) and underline</h5>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
