import React from 'react';
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div id='portfolio'>
        <div className="head">
        <h3 className="title" data-aos="fade-down" data-aos-delay="100">Portfolio</h3>
        <h1 className='title' data-aos="fade-down">Some of my Achievement</h1>
        <br />
        <br />
        </div>
        <div className="p_content">
        <div className="exp" >
            <h1 data-aos="fade-down">FREELANCE AGENCY</h1>
            <h3 data-aos="fade-down" data-aos-delay="100">ongoing</h3>
        </div>
        <div className="achievements">
            <div className="card" data-aos="fade-right">
                <h2>Project Completed</h2>
                <h1>2000+</h1>
            </div>
            <div className="card" data-aos="fade-right" data-aos-delay="100">
                <h2>Average review</h2>
                <h1>4.8 Stars</h1>
            </div>
            <div className="card" data-aos="fade-right" data-aos-delay="200">
                <h2>Happy Clients</h2>
                <h1>500+</h1>
            </div>
        </div>
        <br />
        <br />
        <div className="exp">
            <h1 data-aos="fade-down">Social Platforms - Instagram</h1>
            <h3 data-aos="fade-down" data-aos-delay="100">ongoing</h3>
        </div>
        <div className="achievements">
            <div className="card" data-aos="fade-right">
                <h2>Followings</h2>
                <h1> 1400000 + </h1>
            </div>
            <div className="card" data-aos="fade-right" data-aos-delay="100">
                <h2>Posts</h2>
                <h1>300+</h1>
            </div>
        </div>
        <br />
        <br />
        <div className="exp">
            <h1 data-aos="fade-down">Marketing Agency</h1>
            <h3 data-aos="fade-down" data-aos-delay="100">ongoing</h3>
        </div>
        <div className="achievements">
            <div className="card" data-aos="fade-right">
                <h2>Clients</h2>
                <h1> 100+ </h1>
            </div>
            <div className="card" data-aos="fade-right" data-aos-delay="100">
                <h2>Reviews</h2>
                <h1>5 Stars</h1>
            </div>
        </div>
        </div>
    </div>
  )
}
