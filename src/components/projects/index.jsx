import "./style.css"

import project1 from "../../assets/shots/project1.png"
import project2 from "../../assets/shots/project2.png"
import project3 from "../../assets/shots/project3.png"
import project4 from "../../assets/shots/project4.png"

export default function Projects() {
  return (
    <div className="projects">
      <h1>And there is my other projects</h1>
      <div className="projectsBox">
        <div className="project liquidGlassEffect">
          <img src={project1} alt="bnbm" />
          <div className="projectTexts">
            <h2>BNBM</h2>
            <p>Minimalistic, fast, and well-designed.</p>
            <a href="https://trade-gypsum.netlify.app/">View</a>
          </div>
        </div>
        <div className="project liquidGlassEffect">
          <img src={project2} alt="webity" />
          <div className="projectTexts">
            <h2>Webity</h2>
            <p>3d design via Three.js, language change, message goes to telegram</p>
            <a href="https://webity.netlify.app/">View</a>
          </div>
        </div>
        <div className="project liquidGlassEffect">
          <img src={project3} alt="opera" />
          <div className="projectTexts">
            <h2>Opera</h2>
            <p>First job after completing the course.</p>
            <a href="https://opera-main.netlify.app/">View</a>
          </div>
        </div>
        <div className="project liquidGlassEffect">
          <img src={project4} alt="etiket" />
          <div className="projectTexts">
            <h2>Etiket</h2>
            <p>Landing page about Advertising. This was a real project. It has a long history.</p>
            <a href="https://my-etiket.netlify.app/">View</a>
          </div>
        </div>
      </div>
    </div>
  )
}