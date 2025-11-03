import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="intro">
        <h1>Hi, It's <span>Abul Rashid Akbari</span></h1>
        <h2>I'm a <span>Developer</span></h2>
        <p>
          Passionate about creating responsive, user-friendly web applications using
          modern technologies.
        </p>
        <a href="/contact" className="btn">contact me</a>
      </div>
      <div className="profile-image">
        <img src="D:\web lessons\web class projects\portfolio-react\profile.png" alt="Rashid" />
      </div>
    </section>
  );
}

export default Home;
