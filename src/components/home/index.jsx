import { useGSAP } from "@gsap/react"
import "./style.css"
import gsap from "gsap"
import { useRef, useState } from "react";

const titles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Native Developer",
  "Express.js Developer",
  "Node.js Developer"
];

export default function Home() {
  const textRef = useRef();

  useGSAP(() => {
    gsap.fromTo(".dot",
      { opacity: 0, scale: 1 },
      {
        opacity: 0.4,
        scale: 2,
        duration: 1,
        yoyo: true,
        repeat: -1,
        stagger: {
          amount: 1.5,
          from: "edges",
          grid: "auto"
        }
      }
    );

    //jobChanger
    tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
  }, [])
  return (
    <div className="home">
      <div className="dots">
        {[...Array(310)].map((_, index) => (
          <div key={index} className="dot"></div>
        ))}
      </div>
      <div className="homeTexts liquidGlassEffect">
        <p className="homeTopText">I'm a <span ref={textRef} className="jobChanger">{titles[0]}</span></p>
        {/* <h1>Hi, I'm <span className="name">Abdulloh</span></h1>
        <p>Welcome to my portfolio!</p> */}
      </div>
    </div>
  )
}