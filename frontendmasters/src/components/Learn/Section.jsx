import React from 'react'
import { Link } from 'react-router-dom';
import './LearnPath.css'
import Pprogress from './Pprogress';


function Section({url,des,title}) {
    return (
        <div >
      <div className="contain">
          <div className="background" style={{backgroundImage:`url(${url})`}}>
          <Pprogress/>
          </div>
          <br />
          <h2>{title}</h2>
          <p>{des}</p>
          <br />
        <Link to=""> <button className="btn" > start</button></Link> 
         </div> 
        </div>
    )
}

export default Section
