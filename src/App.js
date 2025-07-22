import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';

export default function App() {
  return (
    <>
      <Home />
      <Projects />
      <Skills/>
      <Footer />
    </>
  );
}