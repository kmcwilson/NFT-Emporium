import React from 'react';
import './Card.css';

export function Card(title, imageURL, body) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageURL} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn'>
                <button>
                    <a>
                        Buy Now
                    </a>
                </button>
            </div>
        </div>
    )
}
export default Card

