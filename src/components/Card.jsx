import React from 'react'
import '../assets/Card.css'


const Card = (props) => {
    const {list} = props
  return (
    <div className='card'>
        <div><img className='cardimga' src={list.imgURL} alt='image'></img></div>
        <div><h3 className='title'>{list.name}</h3></div>
        <div><p>{list.description}</p></div>
    </div>
  )
}

export default Card