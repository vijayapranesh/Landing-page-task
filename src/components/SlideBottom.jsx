import React from 'react'
import '../assets/SlideBottom.css'


const SlideBottom = () => {
  return (
    <div>
        <div className='slide-bottom'>
        <img className='image2' src='https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/bg-masthead.jpg?raw=true'></img>
        <div className='title2'><h2>Ready to get started? Sign up now!</h2></div>
        <div className='input-field1'>
          <span><input className='c' id='navigation' type='email' placeholder='Enter Address'></input></span>
          <span><button className='d' >Submit</button></span> 
        </div>
        </div>  
    </div>
  )
}

export default SlideBottom