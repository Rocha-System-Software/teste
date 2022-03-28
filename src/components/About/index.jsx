import  pic  from '../../assets/images/about.png'
import React, { useEffect } from 'react';
import './style.css'
import "aos/dist/aos.css"
import Aos from "aos";

export default function Home(){
    
    useEffect(() => {
            Aos.init({ duration: 1500 }); // Efeito AOS
    }, []);

    return(
        <div className="about-main" id="aboutme">
        <img className="about-pic" src={pic} alt="hacker boy"></img>
            <div className="text-area-about">
                <h1 data-aos="fade-down" className="about-text">About me</h1>
                <p data-aos="fade-down" className="description-text-about">I'm focused on web development, the languages ​​I use most in my day-to-day are: HTML, CSS, JavaScript, Java, and some frameworks like React and Spring Boot. Always looking for new challenges in this fascinating world of technology!</p>
            </div>
        </div>
    );
}