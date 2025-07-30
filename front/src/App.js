
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header'
import Slider from './components/Slider';
import Services from "./components/Services";
import GisSteps from './components/GisSteps'
import Objects from "./components/Objects";
import Footer from "./components/Footer";
import Documents from "./components/Documents";
import Info from "./components/Info";
import Hero from './components/Hero';

function App() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <Header />
      <Hero />
      <Slider />
      <section id="info">
        <Info />
      </section>
      <section id="services">
        <Services />
      </section>

      <section id="gis">
        <GisSteps />
      </section>
      <section id="documents">
        <Documents />
      </section>

      <section id="objects">
        <Objects />
      </section>


      <section id="contacts">
        <Footer />
      </section>

    </ThemeProvider>
  );
}

export default App;
