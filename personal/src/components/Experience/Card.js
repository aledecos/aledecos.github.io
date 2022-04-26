import React from 'react'
import './card.scss';

const Card = (props) => {
  return (
    <div className='wrapper'>
       <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.img} alt='img'className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    {props.words}
                </p>
                <a href={props.website} className='btn btn-outline-primary'>
                    More About Company
                </a>
            </div> 
        </div> 
    </div>
    
  )
}

export default Card