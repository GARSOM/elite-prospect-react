import './Hero.css';
import logo from '../assets/logo.png';
import ChangingWord from './ChangingWord';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={logo} alt="Elite Prospect" className="hero-logo" />
        <h1 className="hero-title">Добро пожаловать в <span>«Элит Проспект»</span></h1>
        <p className="hero-subtitle">
          Мы — это <ChangingWord /> для вашего комфорта
        </p>
      </div>
    </section>
  );
};

export default Hero;
