import React from 'react'
import '../assets/Header.css'
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {
  return (
    <div className='container'>
      <h5 className='title'>Start Bootstrap</h5>
      <a href='#navigation'><button className='button'>Sign Up</button></a>   
    </div>
  )
}

export default Header