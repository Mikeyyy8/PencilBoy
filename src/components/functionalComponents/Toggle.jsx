import { useThemeStore } from "../../store";
import { SunIcon, MoonIcon } from "lucide-react";

const Toggle = () => {
  const { theme, setTheme } = useThemeStore();
  function ToggleDark() {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <div className="flex items-center justify-between gap-2 text-neutral-600">
      <p>Light</p>
      <div
        onClick={ToggleDark}
        className="relative w-12 h-6 border border-neutral-600 rounded-full"
      >
        <div
          className={`absolute bg-white w-5 h-5 mt-[1px] mx-[1px] rounded-full top-0 
            bottom-0 duration-150 transition-all ease-in-out translate-x-0 flex items-center justify-center ${
              theme === "dark" && "translate-x-6"
            }`}
        >
          {theme === "light" ? (
            <SunIcon width={20} className="text-amber-500" />
          ) : (
            <MoonIcon width={20} stroke="none" className="fill-neutral-500" />
          )}
        </div>
      </div>
      <p>Dark</p>
    </div>
  );
};

export default Toggle;
