import React from 'react'
import Card2 from './Card2'

const Home2 = (props) => {
  return (
    <div>
      {
        props.card3.map((list,index)=>(<Card2 list={list}  key={index}/>))
      }
    </div>
  )
}

export default Home2