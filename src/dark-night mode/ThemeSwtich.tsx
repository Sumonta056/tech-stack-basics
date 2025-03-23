import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/themeProvider";

function ThemeSwtich() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <div
        className={`flext imte cursor-pointer transition-transform duration-500
            ${isDark ? "transform rotate-180" : "rotate-0"}`}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <Sun className="w-8 h-8 text-yellow-500 transition-all rotate-0" />
        ) : (
          <Moon className="w-8 h-8 text-gray-600 transition-all rotate-0" />
        )}
      </div>
    </>
  );
}

export default ThemeSwtich;
