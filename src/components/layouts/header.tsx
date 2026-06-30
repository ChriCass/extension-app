import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import iconSun from "../../assets/images/icon-sun.svg";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsLightMode(storedTheme === "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  return (
    <header className="dark:bg-gray-800 bg-white text-white rounded-3xl my-4 p-4">
      <div className="flex justify-between items-center">
        <a href="/" aria-label="Extensions Manager home">
          <img src={logo} alt="Extensions Manager" />
        </a>
        <button
          onClick={() => setIsLightMode((prev) => !prev)}
          className="rounded-2xl p-4 transition-colors hover:cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-500 bg-gray-100 hover:bg-gray-200"
          aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
        >
          <figure>
            <img
              src={isLightMode ? iconMoon : iconSun}
              alt={isLightMode ? "Moon icon" : "Sun icon"}
            />
          </figure>
        </button>
      </div>
    </header>
  );
};

export default Header;
