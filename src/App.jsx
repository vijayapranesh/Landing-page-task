
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home1 from './components/Home1'
import Home2 from './components/Home2'
import Home3 from './components/Home3'
import SlideBottom from './components/SlideBottom'
import SlideTop from './components/SlideTop'



const cards1 = [{
  imgURL : 'https://intercom.help/showit/assets/svg/icon:sft-window/01497c',
  name : 'Fully Responsive',
  description : 'This theme will look great on any device, no matter the size!',
},{
  imgURL : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCtTRMXL2-Vf1qZLLXzPF9r7Yq7-j5A2pthelVwxCbo6M2j8X3',
  name : 'Bootstrap 5 Ready',
  description : 'Featuring the latest build of the new Bootstrap 5 framework!',
},{
  imgURL : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFQXd0fMx_6oZ1PUVrPNllHVJ3nstA3wKIs89GDQDRzi0k9s0Y',
  name : 'Easy to Use',
  description : 'Ready to use with your own content, or customize the source files!',
}]

const cards2 = [{
  imgURL : 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg',
  name : 'Margaret E.',
  description : '"This is fantastic! Thanks so much guys!"',
},{
  imgURL : 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg',
  name : 'Fred S.',
  description : '"Bootstrap is amazingI.I have been using it to create lots of super nice landing pages"',
},{
  imgURL : 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg',
  name : 'Sarah W.',
  description : '"Thanks so much for making these free resources available to us!"',
}]

const cards3 = [{
  name : 'Fully Responsive Design',
  description : 'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether its a phone, tablet, or desktop the page will behave responsively!',
  imgURL : 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg',
},{
  name : 'Updated For Bootstrap 5',
  description : 'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
  imgURL : '	https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg',
  center : true,
},
{
  name : 'Easy to Use & Customize',
  description : 'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
  imgURL : 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg',
}]


function App() {
const [card1 ,setCard1] = useState(cards1)
const [card2 ,setCard2] = useState(cards2)
const [card3 ,setCard3] = useState(cards3)
  return (
  <>
  <div>
    <Header/>
    <SlideTop/>
    <Home1 card1={card1}/>
    <Home2 card3={card3}/>
    <Home3 card2={card2}/>
    <SlideBottom/>
    <Footer/>
  </div> 
  </>
  )
}

export default App



