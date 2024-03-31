import React from 'react'
import '../assets/Home1.css'
import Card from './Card'

const Home1 = (props) => {
  return (
    <div className='home1'>
        {
            props.card1.map((list,index)=>(<Card list={list}  key={index}/>))
        }
    </div>
  )
}

export default Home1