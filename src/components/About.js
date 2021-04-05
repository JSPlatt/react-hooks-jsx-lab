import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>This is a section about me, wherein I have contributed some sort of content to display on the web</p>
    <img src={ image } alt="I made this" />
  </div>
  );

}

export default About;
