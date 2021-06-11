import React from 'react'
import { Link } from 'react-router-dom'
import { footerlink } from '../../LocalData/Localdata'
import "../Footer/Footer.css"

function Footer() {
    return (
        <div className="footerbody">
            <div className="footerlink" >
                <div>
                <img height="40px" src="https://static.frontendmasters.com/assets/fm/js/frontendmasters.e1e10b58c1.svg" alt="LOGO"/>
                </div>
        
            <div className="linkdiv">
               {footerlink.map(el=><Link className="flink" to="">{el}</Link>)}
            </div>
            </div>
            <div className="storeAd">
                <img src="https://developer.apple.com/assets/elements/icons/download-on-the-app-store/download-on-the-app-store.svg" alt="" />
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
