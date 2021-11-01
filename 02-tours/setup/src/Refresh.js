import React from "react";

const Refresh = ({ fetchTours }) => {
  return (
    <main>
      <div className="title">
        <h2>no tours left.please click refresh</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  );
};

export default Refresh;
