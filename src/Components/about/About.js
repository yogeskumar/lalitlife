import React from "react";
import "./about.css";

export default function About() {
  return (
    <div id="about">
      <h1 className="Title" data-aos="zoom-in">About Me - </h1>
      <p data-aos="zoom-in" data-aos-delay="200">
        I am an Educator, Software developer & A Computer Science Student
        <br />
        learning and Exploring the vast world of computer programming
        <br />
        and teaching others along the way
        <br />
        I'm currently a Freelance agency head, entreprenure and running one of biggest tech channels on instagram
      </p>
      <div className="edu" data-aos="zoom-in">
        <h1>Businesses</h1>
        <div className="schools" data-aos="zoom-in">
          <h2>Freelance agency</h2>
          <h3>
            <span>Global - <a href="https://www.instagram.com/python.hub/">@python.hub</a></span> <span>2018-present</span>
          </h3>
          <br />
          <h2>Online Education platform</h2>
          <h3>
            <span>Global - <a href="https://www.pythonhub.in/">/pythonhub.in</a></span> <span>2022-present</span>
          </h3>
        </div>
      </div>
      <div className="edu" data-aos="zoom-in">
        <h1>Communities</h1>
        <div className="schools" data-aos="zoom-in">
          <h2>@python.hub</h2>
          <h3>
            <span>Instagram - 1.3M+</span> <span>2018-present</span>
          </h3>
          <br />
          <h2></h2>
          <h3>
            <span>and alot more</span> <span></span>
          </h3>
        </div>
      </div>
      <p data-aos="zoom-in" data-aos-delay="200">
         I have been working toward this goal since
        <br /> Highschool, and i still with to grow bigger and better
        <br /> Everyday
      </p>
    </div>
  );
}
