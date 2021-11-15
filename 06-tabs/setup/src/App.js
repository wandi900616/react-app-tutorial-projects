import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Infos from "./Infos";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  const fetchJobsData = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setJobs(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading....</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[jobIndex];

  return (
    <section className="section">
      inside of section
      {/* betul ke section loading? */}
      <div className="title" style={{ backgroundColor: "pink" }}>
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center" style={{ backgroundColor: "aqua" }}>
        {/* button container */}
        {/* buttons */}
        <Buttons data={jobs} setJobFunc={setJobIndex} jobIndex={jobIndex} />
        {/* cannot passed as props={setJobIndex,jobs} */}
        {/* job info */}
        <Infos
          myTitle={title}
          myCompany={company}
          myDuties={duties}
          myDates={dates}
        />
      </div>
    </section>
  );
}

export default App;
