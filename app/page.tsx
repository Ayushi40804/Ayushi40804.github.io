import HeroSection from '../components/HeroSection';
// import { AboutMe } from '../components/AboutMe';
// import Projects from '../components/Projects';
// import TechStack from '../components/TechStack';
// import { Achievements } from '../components/Achievements';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ProgressBar';
// import Socials from '../components/Socials';


export default function Home() {
  return (
    <div className="dark cursor-default">
      <ScrollProgress />
      <NavBar />
      <div id="heroSection">
        <HeroSection />
      </div>
      {/* <div id="aboutme">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="TechStack">
        <TechStack />
      </div>
      <div id="Achievements">
        <Achievements />
      </div>
      <div id="socials">
        <Socials />
      </div>*/
      <div id="footer">
        <Footer />
      </div>}
    </div>
  );
}