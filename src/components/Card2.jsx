import React from 'react'
import '../assets/Card2.css'

const Card2 = (props) => {
    const {list} = props
  return (
    <div  className="container-content">
        
        
        
        {list.center === true ?
        
        ( 
          <>
          <div>
            <img className='img2' src={list.imgURL} alt='image'></img>
          </div>
          <div className='content'>
            <h5 className='title3'>{list.name}</h5>
            <p>{list.description}</p>
          </div>
          </>
  
        ) : <>( 
           <div className='content'>
            <h5 className='title3'>{list.name}</h5>
            <p>{list.description}</p>
           </div> 
           <div>
            <img className='img2' src={list.imgURL} alt='image'></img>
           </div>
        )</>
        }
    </div>
  )
}

export default Card2