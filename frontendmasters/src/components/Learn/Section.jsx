import React from 'react'
import { Link } from 'react-router-dom';
import './LearnPath.css'
import Pprogress from './Pprogress';


function Section({url,des,title,color}) {
    return (
        <div >
      <div className="contain">
          <div className="background" style={{backgroundImage:`url(${url})`}}>
         
          </div>
          <Pprogress/>
          <br />
          <h2>{title}</h2>
          <p style={{height:"70px"}}>{des}</p>
          <br />
        <Link to=""> <button className="btn" style={{backgroundColor:`${color}`}} > Start</button></Link> 
         </div> 
        </div>
    )
}

export default Section
