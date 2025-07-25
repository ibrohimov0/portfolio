import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import MySavdo from './components/mysavdo';
import Projects from './components/projects';
import Skills from './components/skills';

export default function App() {
  return (
    <>
      <Home />
      <MySavdo />
      <Projects />
      <Skills/>
      <Footer />
    </>
  );
}