import React from 'react'
import "../carousal/carousalcomponent.css"
function Carousalcomponent({img,des,date,name}) {
    return (
        <div className="Combody" >
            <div className="Imagebody">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <img id="twitter" src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="" />
            </div>
            <div>
                {des}
            </div>
            <hr />
            <div>
         {date}
            </div>
        </div>
    )
}

export default Carousalcomponent
