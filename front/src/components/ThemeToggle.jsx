import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        zIndex: 2,
        background: "transparent",
        color: theme === "dark" ? "#fff" : "#000",
        border: "1px solid",
        padding: "6px 12px",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {theme === "dark" ? "🌙 Тёмная" : "☀️ Светлая"}
    </button>
  );
};

export default ThemeToggle;
