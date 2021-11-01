import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1> this is an error</h1>
        <Link className="btn btn-primary" to="/">
          home
        </Link>
      </div>
    </section>
  );
};

export default Error;
