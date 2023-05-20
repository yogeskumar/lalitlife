import React from "react";
import "./Project.css";
import pythonhub_insta from "../../assets/media/python-hub-design.png";
import pythonhub_website from "../../assets/media/PythonHub_web_design.png";
import lalit_insta from "../../assets/media/lalit_life_Design.png";
import copy_Asssignment_Design from "../../assets/media/copy-assignments-design2.png";
import stock_pic from "../../assets/media/stock_pic_store.png";
import snake_game from "../../assets/media/sank_game.png";
import color_picker from "../../assets/media/color_picker.png";

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
        <br />
        <h1 className="title">Some Big Freelance Projects I and my team have done</h1>

        <div className="cards">
          <img src={stock_pic} alt="" />
          <div className="content">
            <h3>WEB PAGE</h3>
            <h1>Stock Pics Fetch Site</h1>
            <p className="desc">
              A full website with API connected to fetch stock Pics for Anything and download it without ads or spam content 
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Stock Photos</span>
              <span>Learning from past searches</span>
              <span>Pixel REST API used</span>
              <span>Downloadable</span>
              <span>Responsive</span>
            </p>
            <a href="https://github.com/HarshAg90/Photon-" rel="noreferrer"  target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
        <div className="cards rev">
          <img src={snake_game} alt="" />
          <div className="content">
            <h3>CLI GAME</h3>
            <h1>Snake game Playable in SHELL (CLI)</h1>
            <p className="desc">
              its a Snake game in playable in CLI, made with python and curses module, it have speed adjustment, score system and everything of snake game, its AWESOME
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Its A game</span>
              <span>CLI + game</span>
              <span>ITS A GAME</span>
              <span>Green snake</span>
              <span>Red food</span>
            </p>
            <a href="https://github.com/HarshAg90/CLI-Snake" rel="noreferrer"  target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
        <div className="cards">
          <img src={color_picker} alt="" />
          <div className="content">
            <h3>WEB PAGE</h3>
            <h1>Color Suggestion site</h1>
            <p className="desc">
              A simple side project to generate random color pallet and show it beautifully on webpage
              with ability to copy it from 1 click
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Color generation</span>
              <span>Responsive</span>
              <span>Random, refreshable</span>
            </p>
            <a href="https://github.com/HarshAg90/Color-suggestion" rel="noreferrer"  target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
      </div>
    </section>
  );
}
