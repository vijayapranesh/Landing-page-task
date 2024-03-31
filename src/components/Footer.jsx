import React from 'react'
import '../assets/Footer.css'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
       <footer>
          <div class="footerContainer">
            <div class="footerNav">
                <ul>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                  <li><a>Terms of Use</a></li>
                  <li><a>Privacy Policy</a></li>
                </ul>
                <div class="footerBottom">
                    <p>© Your Website 2023. All Rights Reserved.</p>
                </div>
            </div>
              <div class="socialIcons">
                  <a><i><BiLogoFacebookCircle /></i></a>
                  <a><i><FaTwitter /></i></a>
                  <a><i><FaInstagram /></i></a>
              </div>    
            </div>
       </footer>
    </div>
  )
}

export default Footer