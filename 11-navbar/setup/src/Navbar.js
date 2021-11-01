import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLink, setShowLink] = useState(true);

  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);
  useEffect(() => {
    // const linkHeight = linksRef
    const linksContainerHeight =
      linksRef.current.getBoundingClientRect().height;

    linksContainerRef.current.style.height = `${linksContainerHeight}px`;
    if (showLink) {
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLink]);
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="codingAddict"></img>
            <button
              className="nav-toggle"
              onClick={() => setShowLink(!showLink)}>
              <FaBars />
            </button>
          </div>
          <div
            className="links-container"
            ref={linksContainerRef}
            // {`links-container${showLink ? ` show-container` : ``}`}
          >
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
              {/* <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">product</a>
              </li> */}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((element) => {
              const { id, url, icon } = element;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
