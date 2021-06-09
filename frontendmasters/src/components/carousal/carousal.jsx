import React from "react";
import { twiter } from "../../LocalData/Localdata";
import "./Carousal.css"
import Carousalcomponent from "./carousalcomponent";

function Carousel() {
  const scrollBar = React.useRef();

  const handleScrollLeft = (e) => {
    scrollBar.current.scrollLeft -= 375;
  
  };

 


  const handleScrollRight = () => {
    scrollBar.current.scrollLeft += 375;
   
  };
  return (
    <div className="MainImageBox">
      <h1>What They're Saying About Us (@FrontendMasters)</h1>
      <div className="PrvBtn">
        <button onClick={handleScrollLeft}>{"<"}</button>{" "}
      </div>{" "}
      <div ref={scrollBar} className="ImageBox">
        {twiter.map((item) => (
         <Carousalcomponent  img={item.img}
            name={item.name}
            des={item.des}
            date={item.date}
        />
        ))}
      </div>
      <div className="NxtBtn">
        <button onClick={handleScrollRight}>{">"}</button>
      </div>
    </div>
  );
}

export default Carousel;
