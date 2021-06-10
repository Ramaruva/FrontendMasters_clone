import React from 'react'
import "../carousal/carousalcomponent.css"
function Carousalcomponent({img,des,date,name}) {
    return (
        <div className="Combody" >
            <div className="Imagebody">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <img id="twitter" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" alt="" />
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
