import React from 'react'
import "../carousal/carousalcomponent.css"
function Carousalcomponent({img,des,date,name}) {
    return (
        <div className="Combody" >
            <div className="Imagebody">
            <img src={img} alt="" />
            <h4 className="C-head">{name}</h4>
            <img id="twitter" src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="" />
            </div>
            <div className="C-des">
                {des}
            </div>
            <hr  />
            <div className="C-des">
         {date}
            </div>
        </div>
    )
}

export default Carousalcomponent
