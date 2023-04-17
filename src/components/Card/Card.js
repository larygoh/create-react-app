import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={props.imgSrc} alt={props.imgAlt}></img>
            </div>
            <div className='card-body'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text'>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Card