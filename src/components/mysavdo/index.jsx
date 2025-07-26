import "./style.css"
import MySavdoIcon from "../../assets/icons/MySavdo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ImageSlider from "../ImageSlider";

import Web1 from "../../assets/shots/web1.png";
import Web2 from "../../assets/shots/web2.png";
import Web3 from "../../assets/shots/web3.png";
import Web4 from "../../assets/shots/web4.png";
import Web5 from "../../assets/shots/web5.png";
import Web6 from "../../assets/shots/web6.png";

import Mobile1 from "../../assets/shots/mobile1.jpg";
import Mobile2 from "../../assets/shots/mobile2.jpg";
import Mobile3 from "../../assets/shots/mobile3.jpg";
import Mobile4 from "../../assets/shots/mobile4.jpg";
import Mobile5 from "../../assets/shots/mobile5.jpg";
import Mobile6 from "../../assets/shots/mobile6.jpg";

import CrmImage from "../../assets/shots/crm.png";

gsap.registerPlugin(ScrollTrigger);

export default function MySavdo() {
  const orangeImages = [CrmImage, CrmImage];
  const blueImages = [Web1, Web2, Web3, Web4, Web5, Web6];
  const greenImages = [Mobile1, Mobile2, Mobile3, Mobile4, Mobile5, Mobile6];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mySavdo",
        start: "top 90%",
        toggleActions: "play none none reverse",
        onLeaveBack: () => {
          gsap.to(".mySavdoIcon", {
            scale: 0,
            duration: 0.3
          });
          gsap.to(".mySavdo", {
            backgroundColor: "white"
          });
          gsap.to(".mainBoxes", {
            opacity: 0
          });
          gsap.to(".glowContainer", {
            opacity: 0
          });
          gsap.to(".mainMySavdoTexts", {
            opacity: 0
          });
        }
      }
    });

    tl.fromTo(".mySavdoIcon", { scale: 0, y: 0 }, { delay: 1, scale: 1, y: "1vh", duration: 0.5, ease: "power2.out" })
      .to(".mySavdoIcon", { scale: 3, y: "49vh", duration: 1, ease: "power2.inOut" })
      .to(".mySavdoIcon", { scale: 0.5, duration: 0.2, ease: "power1.in" })
      .to(".mySavdo", { backgroundColor: "black", duration: .1 })
      .to(".mySavdoIcon", { scale: 3, duration: 0.2, ease: "power1.out" })
      .fromTo(".mainBoxes", { opacity: 0, scale: 0.3, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)", stagger: 0.1 })
      .fromTo(".mainMySavdoTexts", { opacity: 0, scale: 0.3, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)", stagger: 0.1 })
      .to(".glowContainer", { opacity: 1, duration: 0.5, ease: "power2.out" });
  }, []);

  return (
    <div className="mySavdo">
      <div className="glowContainer">
        <div className="glow glow-orange"></div>
        <div className="glow glow-blue"></div>
        <div className="glow glow-green"></div>
      </div>
      <img src={MySavdoIcon} alt="MySavdo icon" className="mySavdoIcon" />
      <div className="mainMySavdoTexts">
        <h1>MySavdo</h1>
        <h3>My Big Project ever</h3>
      </div>
      <div className="mainBoxes">
        <span>
          <div className="orangeBox liquidGlassEffect">
            <ImageSlider images={orangeImages} width="300px" top="25%" />
            <div className="textBox">
              <h4>🛠️ Big and cool system of backend</h4>
              <p>Built with NodeJS, Express.js, MongoDB</p>
            </div>
          </div>
          <div className="blueBox liquidGlassEffect">
            <ImageSlider images={blueImages} width="350px" top="20%" />
            <div className="textBox">
              <h4>🤩 Amazig and Functional Web CRM</h4>
              <p>Built with React.js, Redux toolkit</p>
            </div>
          </div>
        </span>
        <div className="greenBox liquidGlassEffect">
          <ImageSlider images={greenImages} width="300px" top="60%" />
          <div className="textBox">
            <h4>🎨 Wonderful and Quick Ui on Mobile</h4>
            <p>Built with React Native, Expo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
