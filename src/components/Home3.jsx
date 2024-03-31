import React from 'react'
import '../assets/Home3.css'
import Card1 from './Card1'

const Home3 = (props) => {
  return (
    <div className='home3'>
      <h2 className='heading3'>What people are saying...</h2>
      <div className='homecard'>
        {
            props.card2.map((list,index)=>(<Card1 list={list}  key={index}/>))
        }
      </div>
    </div>
  )
}

export default Home3