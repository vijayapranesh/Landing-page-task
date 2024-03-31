import React from 'react'
import '../assets/Card1.css'

const Card1 = (props) => {
    const {list}=props
  return (
    
    <div  className="cardimg">

        <div><img className='image' src={list.imgURL} alt='image'></img></div>
        <div><h5 className='title'>{list.name}</h5></div>
        <div><p>{list.description}</p></div>
    </div>
  )
}

export default Card1