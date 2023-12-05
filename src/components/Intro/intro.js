import React from 'react'
import './intro.css'
import sportsInjury from '../../assets/sportsInjury.png';
import learnMore from '../../assets/learnMore.png'
import './exercises'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello! </span>
                <span className='introText'>Do you experience injuries, <br />especially when working out?</span>
                <p className='introPara'>We are here to provide you with specialized information on <br /> workout injuries, and how to resolve them.</p>
                <Link><button className='btn'><img src={learnMore} alt='Learn More' className='learnMore' /></button></Link>
            </div>
            <img src={sportsInjury} alt='Profile' className="bg" />
    </section>
  )
}




export default Intro;