import React from "react";
import "./Project.css";
import lofi_i from "../../assets/media/Lofi_icon.png";
import Screen_saver from "../../assets/media/screen_saver.png";
import hand_detection from "../../assets/media/hand_detection.png";
import beat_maker from "../../assets/media/beatmaker.png";
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
          <img src={lofi_i} alt="" />
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
            <a href="https://www.instagram.com/python.hub/" target="_blank">TAKE ME TO THE PAGE</a>
          </div>
        </div>

        <div className="cards rev">
          <img src={Screen_saver} alt="" />
          <div className="content">
            <h3>ENHANCED SCREEN SAVER</h3>
            <h1>Github Graph Clock</h1>
            <p className="desc">
              Screen Saver + Github Comit history Graph + Reminder [Still working on some more new features]
              Tech Stack – GraphQL API, AJAX, Express.js, Html-CSS, Github API, Javascript
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Theme based Clocks</span>
              <span>Github Graph</span>
              <span>Reminder to work(on github)</span>
              <span>To do Reminders</span>
            </p>
            <a href="https://github.com/HarshAg90/Smart-Screen-Saver" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>

        <div className="cards">
          <img src={hand_detection} alt="" />
          <div className="content">
            <h3>IMAGE DETECTION</h3>
            <h1>Python Hand-Gestures Detection Program</h1>
            <p className="desc">
              Pyhton Programme to detect Hand Gestures, classify them and show them on the screen
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Open Cv</span>
              <span>Live video feed detection</span>
            </p>
            <a href="https://github.com/HarshAg90/Image-Detection" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
        <div className="cards rev">
          <img src={beat_maker} alt="" />
          <div className="content">
            <h3>WEB PAGE</h3>
            <h1>Beats Maker Website</h1>
            <p className="desc">
              A simple web page to generate different beats from different instruments, made entirely
              from Vanila JS
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Beat generation</span>
              <span>9 different instruments to choose from</span>
              <span>Speed change</span>
              <span>Easy to use</span>
            </p>
            <a href="https://github.com/HarshAg90/WEBSITE-to-make-Beats" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
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
            <a href="https://github.com/HarshAg90/Photon-" target="_blank">TAKE ME TO PROJECT</a>
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
            <a href="https://github.com/HarshAg90/CLI-Snake" target="_blank">TAKE ME TO PROJECT</a>
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
            <a href="https://github.com/HarshAg90/Color-suggestion" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
      </div>
    </section>
  );
}
