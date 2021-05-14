import React from 'react';
import './card-style.css';

const CardUI = (props) => {
    return(        
        <div className="card text-center" >
            <div className="card-img">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark ">
               <h4 className="card-title card-text">{props.title}</h4>
            </div>
        </div>
    );
}

export default CardUI;
