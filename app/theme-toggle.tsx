"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
// Runs before paint (inlined in <head>) so the saved or system theme applies without a flash.
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`;
export function ThemeToggle() {
    const [dark, setDark] = useState(false);
    useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
    function toggle() {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        }
        catch { }
    }
    return <button className="icon-button theme-toggle" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
      {dark ? <Sun size={17}/> : <Moon size={17}/>}
    </button>;
}
