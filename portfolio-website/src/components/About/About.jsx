import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Federico, and I have recently relocated to Toronto.</p>
            <p>
              Over the past two and a half years in Italy, I've developed my
              expertise as a software developer, sharpening my skills in Java,
              Spring, SQL, Angular, and React.
            </p>
          </div>
          <div className="about-skills">
            <div className="skill">
              <p>Java</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>Spring</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="skill">
              <p>HTML & CSS</p> <hr style={{ width: "40%" }} />
            </div>
            <div className="skill">
              <p>Javascript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>ReactJs</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>Angular</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default About;
