import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Elite Prospect" />
      </div>

      <div className="controls">
        <ThemeToggle />
        <div className="burger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#services" onClick={closeMenu}>Услуги</a>
        <a href="#gis" onClick={closeMenu}>ГИС ЖКХ</a>
        <a href="#documents" onClick={closeMenu}>Документы</a>
        <a href="#objects" onClick={closeMenu}>Объекты</a>
        <a href="#contacts" onClick={closeMenu}>Контакты</a>
      </nav>

    </header>
  );
};

export default Header;
