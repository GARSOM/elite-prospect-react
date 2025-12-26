import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const A11Y_STORAGE_KEY = "a11y_mode";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [a11yMode, setA11yMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Инициализация из localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(A11Y_STORAGE_KEY);
      const enabled = saved === "1";
      setA11yMode(enabled);
      document.body.classList.toggle("a11y", enabled);
    } catch {
      // если localStorage недоступен — просто игнорируем
    }
  }, []);

  // Применение режима
  useEffect(() => {
    document.body.classList.toggle("a11y", a11yMode);
    try {
      localStorage.setItem(A11Y_STORAGE_KEY, a11yMode ? "1" : "0");
    } catch {
      // игнор
    }
  }, [a11yMode]);

  const toggleA11y = () => setA11yMode((v) => !v);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Elite Prospect" />
      </div>

      <div className="controls">
        <ThemeToggle />

        {/* Кнопка слабовидящих */}
        <button
          type="button"
          className={`a11y-toggle ${a11yMode ? "is-on" : ""}`}
          onClick={toggleA11y}
          aria-pressed={a11yMode}
          aria-label="Версия для слабовидящих"
          title="Версия для слабовидящих"
        >
          Версия для слабовидящих
        </button>

        <div
          className="burger"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#services" onClick={closeMenu}>
          Услуги
        </a>
        <a href="#gis" onClick={closeMenu}>
          ГИС ЖКХ
        </a>
        <a href="#documents" onClick={closeMenu}>
          Документы
        </a>
        <a href="#objects" onClick={closeMenu}>
          Объекты
        </a>
        <a href="#contacts" onClick={closeMenu}>
          Контакты
        </a>
      </nav>
    </header>
  );
};

export default Header;
