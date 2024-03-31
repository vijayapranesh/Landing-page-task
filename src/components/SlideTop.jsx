import React from 'react'
import '../assets/SlideTop.css'


const SlideTop = () => {
  return (
    
      <div className='slide-top'>
        <div className='imgcont'>
        <img className='image1' src='https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/bg-masthead.jpg?raw=true'></img>
        </div>
        <div className='title1'>
            <h1>Generate more leads with a professional landing page!</h1>
        </div>
          <div className='input-field'>
              <span><input className='a' type='email' placeholder='Enter Address'></input></span>
              <span><button className='b'>Submit</button></span> 
          </div>
        </div>  
  )
}

export default SlideTop