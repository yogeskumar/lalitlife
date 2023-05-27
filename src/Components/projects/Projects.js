import React from "react";
import "./Project.css";
import pythonhub_insta from "../../assets/media/python-hub-design.png";
import pythonhub_website from "../../assets/media/PythonHub_web_design.png";
import lalit_insta from "../../assets/media/lalit_life_Design.png";
import copy_Asssignment_Design from "../../assets/media/copy-assignments-design2.png";
import amazonAi from "../../assets/media/Amazon-AI.png"
import appointmentAi from "../../assets/media/Appointment-ai.png";
import Game_predictor from "../../assets/media/game-predictor.png";

export default function Projects() {
  return (
    <section id="proj">
      
      <div id="projects">
        <h3 className="title">Portfolio</h3>
        <h1 className="title">Some of my Social Platforms</h1>
        <div className="cards">
          <img src={pythonhub_insta} alt="" />
          <div className="content">
            <h3>Tech community</h3>
            <h1>Python Hub - Instagram</h1>
            <p className="desc">
              Instagram page dediciated to python Programming language
              learning it, builing big projects in it, 
              and supporting everyone with help and mentoring related to it
            </p>
            <h2>Milestones</h2>
            <p className="features">
              <span>1.3 million Followers</span>
              <span>400 + Posts</span>
              <span>Daily regular activity</span>
              <span>Loving and caring community</span>
            </p>
            <a href="https://www.instagram.com/python.hub/" rel="noreferrer"  target="_blank">TAKE ME TO THE PAGE</a>
          </div>
        </div>

        <div className="cards rev">
          <img src={pythonhub_website} alt="" />
          <div className="content">
            <h3>WEB PLATFORM</h3>
            <h1>Python Hub Website</h1>
            <p className="desc">
              Web Platform dedicated to python programming, its mainly build for more structured 
              access to content and cources important for a Developer and enthusiast
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Cources</span>
              <span>Roadmaps</span>
              <span>Blogs and tips</span>
            </p>
            <a href="https://www.pythonhub.in/" rel="noreferrer"  target="_blank">TAKE ME TO WEBSITE</a>
          </div>
        </div>

        <div className="cards">
          <img src={lalit_insta} alt="" />
          <div className="content">
            <h3>INSTAGRAM</h3>
            <h1>Lalit's Personal Instagram</h1>
            <p className="desc">
              Page dedicated to self improvement and content related to topics other than python programming
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Self improvement</span>
              <span>Guidance</span>
              <span>Free important tips and resources</span>
              <span>Peaking into personal life</span>
            </p>
            <a href="https://www.instagram.com/lalit.life/" rel="noreferrer"  target="_blank">TAKE ME TO THE PAGE</a>
          </div>
        </div>
        <div className="cards rev">
          <img src={copy_Asssignment_Design} alt="" />
          <div className="content">
            <h3>WEB PLATOFORM</h3>
            <h1>Copyassignments.com</h1>
            <p className="desc">
              Blog and news site dedicated to provide free usefull content online, with alot of
              talented developers working for us 
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Tech Blogs</span>
              <span>All the different tech covered</span>
              <span>100+ Projects</span>
              <span>Interview prep</span>
            </p>
            <a href="https://copyassignment.com" rel="noreferrer"  target="_blank">TAKE ME TO THE WEBSITE</a>
          </div>
        </div>

        <br />
        <hr />
        <br />
        <h1 className="title">Some Big Freelance Projects I and my team have done</h1>

        <div className="cards">
          <img src={appointmentAi} alt="" />
          <div className="content">
            <h3>WEB PAGE</h3>
            <h1>Auto Appointment Schedular</h1>
            <p className="desc">
              A website that help you schedule an appointment to doctors, lawyers, and many other service based professionalists automatically
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Web Platform</span>
              <span>Easy Access</span>
              <span>REST API used</span>
              <span>fast and easy workflow</span>
              <span>Responsive</span>
            </p>
            {/* <a href="#" rel="noreferrer"  target="_blank">TAKE ME TO PROJECT</a> */}
          </div>
        </div>
        <div className="cards rev">
          <img src={amazonAi} alt="" />
          <div className="content">
            <h3>CLI Bot</h3>
            <h1>Buying Automation at Amazon</h1>
            <p className="desc">
              There's always rush to buy a good product and many time products get out of stock very fast
              <br />
              This is Python executable script to automate <b> buying</b> a certain product as soon as it <b> stocks back up</b>
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>100% Autonomus</span>
              <span>Auto detects If product is back in stock</span>
              <span>no viruses</span>
              <span>1 click setup</span>
              <span>easy and reliable</span>
              {/* <span>Red food</span> */}
            </p>
            {/* <a href="https://github.com/HarshAg90/CLI-Snake" rel="noreferrer"  target="_blank">TAKE ME TO PROJECT</a> */}
          </div>
        </div>
        <div className="cards">
          <img src={Game_predictor} alt="" />
          <div className="content">
            <h3>Web Page</h3>
            <h1>AI based Game Winning Probability Generator</h1>
            <p className="desc">
              A web application that integrates AI with large data collection to Predict the Probable winning team with high acuracy
              <br />
              the winning is considered by Alot of factors like <b> Number of balls left, number of wickets left, injured players </b>etc
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Artificial Inteligence</span>
              <span></span>
              <span>Web Platform</span>
              <span>High acuracy</span>
              <span>Cricket</span>
            </p>
            {/* <a href="https://github.com/HarshAg90/Color-suggestion" rel="noreferrer"  target="_blank">TAKE ME TO PROJECT</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
