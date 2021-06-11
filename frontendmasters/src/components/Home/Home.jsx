
import React from "react";
import "../Home/Homepage.css"
import hero from "../../assets/hero.mp4";
import Cbtn from "../Home/Homepage.js";
import { Subjectimg } from "../../LocalData/Localdata";
import { Link } from "react-router-dom";
import Carousel from "../carousal/carousal";

function Home() {
    return (
        <div>
        <div style={{ position: "relative", zIndex: "-1", width: "100%", height: "90%", }} >
        <video  width="100%" autoplay={1} muted loop>
          <source src={hero} type="video/mp4" />
        </video>
       
      </div>
      <div >
      <div className="Onvideo">
        <h1>
          <strong>Advance Your Skills</strong>
          <br />
          <span>with In-Depth, Modern</span>
          <br />
          <span>Front-End Engineering Courses</span>
        </h1>
        <Cbtn>Browse our courses</Cbtn>
        <Cbtn primary>View Learing Paths</Cbtn>
      </div>
      </div>
      <div>
        <svg style={{ height: "70", width: "100%", zIndex: "1" }}>
          <polygon
            points="0,60 0,30 1700,60"
            style={{ fill: "#0a0a0a", stroke: "none", strokeWidth: "1" }}
          />
        </svg>
      </div>
      <div className="Subject-flex" >
        <div className="Subject">
          {Subjectimg.map((el) => (
            <div>
             <Link to=""><img id="Subimage" src={el} alt="logo" /></Link>
            </div>
          ))}
        </div>
      </div>
        <Carousel />
        </div>
        
    )
}

export default Home