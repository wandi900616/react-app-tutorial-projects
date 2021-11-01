import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);

  const { closeSubmenu } = data;

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>hellloooooo</h1>
          <p>niccccaasaasa</p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
