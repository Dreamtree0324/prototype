import React from 'react';

function Card(props){
    return(
        <div className="card-item">
            <div className="card-top">
                <p>{props.cardTitle}</p>
            </div>

            <div className="card-bottom">
                <a href={props.cardLink} id="link-btn"> 이동하기 </a>
            </div>
        </div>
    )
}

export default Card;