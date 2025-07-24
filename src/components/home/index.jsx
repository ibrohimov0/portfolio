import { useGSAP } from "@gsap/react"
import "./style.css"
import gsap from "gsap"
import { TextPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

import JsIcon from "../../assets/icons/js.svg"
import ExpressIcon from "../../assets/icons/express.svg"
import MongodbIcon from "../../assets/icons/mongodb.svg"
import NodeIcon from "../../assets/icons/node.svg"
import ReactIcon from "../../assets/icons/react.svg"
import SassIcon from "../../assets/icons/sass.svg"
import UbuntuIcon from "../../assets/icons/ubuntu.svg"

gsap.registerPlugin(TextPlugin);


export default function Home() {
  useGSAP(() => {
    gsap.fromTo(".dot",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 1.5,
          from: "edges",
          grid: "auto"
        }
      }
    );
    gsap.from(".texts", {
      opacity: 0,
      rotateX: 90,
      transformOrigin: "top center",
      duration: 2,
      ease: "back.out(2)",
      onComplete: () => {
        gsap.to(".texts", {
          y: "+=3",
          x: "+=2",
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

  }, []);

  //Job changer efffect
  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Native Developer",
    "Express.js Developer",
    "Node.js Developer"
  ];
  const textRef = useRef(null);
  const timelineRef = useRef(gsap.timeline({ repeat: -1, repeatDelay: 0.5 }));

  useEffect(() => {
    const tl = timelineRef.current;

    titles.forEach((title, i) => {
      tl.to(textRef.current, {
        duration: title.length * 0.1,
        text: title,
        ease: "none",
      });

      tl.to({}, { duration: 1 });

      tl.to(textRef.current, {
        duration: 0.5,
        text: "",
        ease: "none",
        clearProps: "text",
      });
    });
  }, []);
  //logo animation
  useEffect(() => {
    const logos = gsap.utils.toArray(".logo");

    logos.forEach((el, index) => {
      const angle = (360 / logos.length) * index;
      const distance = 180;

      const x = Math.cos(angle * (Math.PI / 180)) * distance;
      const y = Math.sin(angle * (Math.PI / 180)) * distance;

      gsap.fromTo(el,
        {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0,
        },
        {
          x,
          y,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          onComplete: () => {
            gsap.to(el, {
              y: "+=5",
              x: "+=1",
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.1 + Math.random() * 0.1
            });
          }
        }
      );
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    tl.to(".scrollDown", {
      y: 10, // Boshida ko‘proq pastga
      duration: 0.3,
      ease: "sine.inOut",
    })
      .to(".scrollDown", {
        y: 0, // Orqaga qaytish
        duration: 0.3,
        ease: "sine.inOut",
      })
      .to(".scrollDown", {
        y: 15, // Biroz kamroq pastga
        duration: 0.5,
        ease: "sine.inOut",
      })
      .to(".scrollDown", {
        y: 0,
        duration: 0.5,
        ease: "sine.inOut",
      })
      .to({}, { duration: 2 })
  }, []);
  return (
    <div className="home">
      <div className="dots">
        {[...Array(310)].map((_, index) => (
          <div key={index} className="dot"></div>
        ))}
      </div>

      <div className="homeTexts">
        <div className="texts topTexts liquidGlassEffect">
          <h2>I'm a <h2 ref={textRef} /></h2>
        </div>
        <div className="mainTexts">
          <div className="logos">
            <img className="logo liquidGlassEffect" src={SassIcon} alt="SassIcon" />
            <img className="logo liquidGlassEffect" style={{background: "rgba(255,255,255,0.3)"}} src={ExpressIcon} alt="ExpressIcon" />
            <img className="logo liquidGlassEffect" src={UbuntuIcon} alt="UbuntuIcon" />
            <img className="logo liquidGlassEffect" src={MongodbIcon} alt="MongodbIcon" />
            <img className="logo liquidGlassEffect" src={NodeIcon} alt="NodeIcon" />
            <img className="logo liquidGlassEffect" src={JsIcon} alt="JsIcon" />
            <img className="logo liquidGlassEffect" src={ReactIcon} alt="ReactIcon" />
          </div>
          <p className="texts liquidGlassEffect">
            <span>🚀I'm Abdulloh,</span><br /><br />
            A passionate Full Stack Developer 💻 with a focus on building modern 🧠, responsive 📱, and scalable 🌐 web and mobile applications.<br /><br />
            💻 I specialize in technologies like React Native,React ⚛️, Node.js 🌐, Express.js 🚂, and MongoDB 🍃<br /><br />
            🧠 With a strong interest in both frontend 🎨 and backend 🛠️ development, I love crafting clean interfaces, writing efficient APIs 🔗, and solving real-world problems through code.<br /><br />
            🏓 When I'm not coding, you'll probably find me exploring new technologies 💡 or enjoying a game of table tennis.<br /><br />
          </p>
        </div>
        <i className="scrollDown fa-solid fa-chevron-down" />
      </div>
    </div>
  )
}