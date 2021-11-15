import React from "react";

const Buttons = ({ data: jobs, setJobFunc: setJobIndex, jobIndex }) => {
  //   const { jobs, setJobIndex, jobIndex } = props;
  console.log(jobs);
  return (
    <div className="btn-container" style={{ backgroundColor: "green" }}>
      {jobs.map((job, index) => {
        return (
          <button
            className={`job-btn ${index === jobIndex && "active-btn"}`}
            key={job.id}
            onClick={() => {
              setJobIndex(index);
            }}>
            {job.title}
          </button>
        );
      })}
      inside of btn-container
    </div>
  );
};

export default Buttons;
