import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'
import cursor from '../assets/icons/hand-cursor.png'


const InfoBox = ({text, link, btnText}) => (
    <div className='info-box' style={{width:"400px"}}>
    <p className='font-medium sm:text-xl text-center' >{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn' style={{width:"180px", height:"50px"}}  >
    {btnText}
    <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Adarsh</span>👋
        <br/>
        Drag to Explore ! 
        </h1>
    ),
    2 : (
        <InfoBox 
        text="Want to know about me?"
        link="/about"
        btnText="Click here"
        />
    ),
    3 : (
        <InfoBox 
        text="Explore my work?"
        link="/projects"
        btnText="My projects"
        />
    ),
    4 : (
        <InfoBox 
        text="Contact me?"
        link="/contact"
        btnText="Click here!"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
