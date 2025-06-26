import React from "react";
import './Home.css';

function Home(){
  return(
    <div className="home-container">
      <div className="left-section">
        <h3 className="date">Jun 16, 2025</h3>
        <h1 className="title">Mentor Connect</h1>
        <h2 className="subtitle">Connect with mentors for career guidance and skill development.</h2>
        <h2 className="subtitle">Meet your own mentor</h2>
        <p className="price">★★★★★ <strong>FREE</strong></p>
        <p className="description">
          kjhwuyjhwefcjwehkjn.
        </p>
        <div className="buttons">
          <button className="counter">- 1 +</button>
          <button className="Register">Register</button>
        </div>
        <h3 className="available">24hr Available</h3>
        <div className="combo-boxes">
          <div className="combo">
            <p><strong>Jenny Wilson</strong><br/>Writing & Listening<br/>70rp/hour</p>
          </div>
          <div className="combo">
            <p><strong>Jane Copper</strong><br/>Meditation & Yoga<br/>100rp/hour</p>
          </div>
        </div>
      </div>
      
      <div className="right-section">
        <div className="mentor-card-stack"></div>
        <ul className="mentor-list">
          <li>Jane Cooper</li>
          <li>Wade Warren</li>
          <li>Brooklyn Simmons</li>
          <li>Jenny Wilson</li>
          <li>Savannah Nguyen</li>
          <li>Bessie Cooper</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;