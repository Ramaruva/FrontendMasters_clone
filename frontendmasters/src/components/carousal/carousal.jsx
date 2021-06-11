import React from "react";
import { twiter } from "../../LocalData/Localdata";
import "./Carousal.css"
import Carousalcomponent from "./carousalcomponent";

function Carousel() {
  const scrollBar1 = React.useRef();
  const scrollBar2 = React.useRef();

  const handleScrollLeft = (e) => {
    scrollBar1.current.scrollLeft -= 375;
    scrollBar2.current.scrollLeft -= 375;
  
  };

 


  const handleScrollRight = () => {
    console.log(scrollBar1)
    if(scrollBar1.current.scrollLeft>=2600){
     
      scrollBar1.current.scrollLeft = 0;
      scrollBar2.current.scrollLeft = 0;

    }
    else{
      scrollBar1.current.scrollLeft += 375;
      scrollBar2.current.scrollLeft += 375;

    }
  
    
   
  };
  return (
    <div className="MainImageBox">
      <h1>What They're Saying About Us (@FrontendMasters)</h1>
      <div className="PrvBtn">
        <button onClick={handleScrollLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path style={{fill:"white"}} d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"></path></g></svg></button>{" "}
      </div>{" "}
      <div ref={scrollBar1} className="ImageBox">
        {twiter.map((item) => (
         <Carousalcomponent  img={item.img}
            name={item.name}
            des={item.des}
            date={item.date}
        />
        
        ))}
      </div>
      <div ref={scrollBar2} className="ImageBox">
        {twiter.map((item) => (
         <Carousalcomponent  img={item.img}
            name={item.name}
            des={item.des}
            date={item.date}
        />
        
        ))}
      </div>
      <div className="NxtBtn">
        <button onClick={handleScrollRight}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50"  height="50" viewBox="0 0 501.5 501.5"><g ><path style={{fill:"white"}}  d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"></path></g></svg></button>
      </div>
    </div>
  );
}

export default Carousel;
