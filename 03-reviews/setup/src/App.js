import React from "react";
import Review from "./Review";
import { FaGithubSquare } from "react-icons/fa";
function App() {
  return (
    <main>
      <section className="container">
        <div>
          <h2>reviews project setup</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
