import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);

  const { hex, rgb, weight, index } = props;
  // console.log(hex);
  const bcg = rgb.join(",");
  console.log(rgb.join(","));

  return (
    <article
      className={`${"color"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default SingleColor;
