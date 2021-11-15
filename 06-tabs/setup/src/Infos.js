import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Infos = ({
  myTitle: title,
  myCompany: company,
  myDuties: duties,
  myDates: dates,
}) => {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>

      {duties.slice(0, 2).map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"> </FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
      <p>everything contained in article.job-info</p>
      <p>article.job-info[h3,h4,p,iteration of duties]</p>
    </article>
  );
};

export default Infos;
